/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type ChangeEvent, useState, useEffect } from 'react';
import { authAxios, defaultAxios } from '../../utils/axios';

import EXIF from 'exif-js';

interface Coordinates {
  latitude: number;
  longitude: number;
}

function convertDegreesMinutesSecondsToDecimal(
  degrees: number,
  minutes: number,
  seconds: number,
  direction: 'N' | 'S' | 'E' | 'W'
): number {
  let decimal = degrees + minutes / 60 + seconds / 3600;
  if (direction === 'S' || direction === 'W') {
    decimal = -decimal;
  }
  return decimal;
}

function convertDMSArrayToCoordinates(
  GPSLatitude: [number, number, number],
  GPSLatitudeRef: 'N' | 'S',
  GPSLongitude: [number, number, number],
  GPSLongitudeRef: 'E' | 'W'
): Coordinates {
  if (GPSLatitude.length !== 3 || GPSLongitude.length !== 3) {
    throw new Error(
      'Invalid input arrays. Each array should contain degrees, minutes, seconds, and direction.'
    );
  }

  const latitude = convertDegreesMinutesSecondsToDecimal(
    ...GPSLatitude,
    GPSLatitudeRef
  );
  const longitude = convertDegreesMinutesSecondsToDecimal(
    ...GPSLongitude,
    GPSLongitudeRef
  );

  return {
    latitude,
    longitude
  };
}

const ImageUploadModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [imageFiles, setImageFiles] = useState<any[]>([]);
  const [extractedMetadata, setExtractedMetadata] = useState<any[]>([]);
  const [previewIndex, setPreviewIndex] = useState<number>(0);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const prevBtnClick = () => {
    if (previewIndex === 0) setPreviewIndex(imageFiles.length - 1);
    else {
      setPreviewIndex((prev) => prev - 1);
    }
  };

  const nextBtnClick = () => {
    if (previewIndex === imageFiles.length - 1) setPreviewIndex(0);
    else {
      setPreviewIndex((prev) => prev + 1);
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreviewIndex(0);
    setExtractedMetadata([]);
    setImageFiles([]);

    const selectedFiles: any[] = Array.from(e.target.files ?? []);

    if (selectedFiles.length === 0) return;

    if (selectedFiles.length > 10) {
      alert('10개 이상의 파일을 선택할 수 없습니다.');
      return;
    }

    setImageFiles(selectedFiles);
  };

  const handleSubmit = async () => {
    if (imageFiles.length === 0) {
      alert('파일을 선택해주세요.');
      return;
    }

    try {
      const fileNames = imageFiles.map((file) => file.name);

      const response = await authAxios.post(
        // 'http://localhost:8080/file/presigned',      // for local
        `${process.env.REACT_APP_API_URL}/file/presigned`, // for production
        {
          images: fileNames
        }
      );

      const { preSignedUrls } = response.data;

      for await (const [index, file] of imageFiles.entries()) {
        await defaultAxios.put(preSignedUrls[index], file, {
          headers: {
            'Content-Type': file.type
          }
        });
      }

      alert('성공적으로 업로드 되었습니다.');
    } catch (error) {
      console.error('Error uploading file: ', error);
      alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
  };

  console.log(extractedMetadata);

  useEffect(() => {
    // Extract Exif data for each selected image
    const extractExifData = async () => {
      setIsLoading(true);
      const exifDataPromises = imageFiles.map(async (file) => {
        return await new Promise<any>((resolve) => {
          EXIF.getData(file, function () {
            const exifData = EXIF.getAllTags(this);

            const {
              DateTime,
              DateTimeOriginal,
              GPSLatitude,
              GPSLongitude,
              GPSLatitudeRef,
              GPSLongitudeRef,
              Make,
              Model
            } = exifData;

            if (!GPSLatitude || !GPSLongitude) {
              resolve({
                DateTime: DateTime ?? Date.now(),
                DateTimeOriginal: DateTimeOriginal ?? Date.now(),
                latitude: undefined,
                longitude: undefined,
                Make: Make ?? '',
                Model: Model ?? ''
              });
            } else {
              const { latitude, longitude } = convertDMSArrayToCoordinates(
                GPSLatitude,
                GPSLatitudeRef as 'N' | 'S',
                GPSLongitude,
                GPSLongitudeRef as 'E' | 'W'
              );

              const filteredExifData = {
                DateTime: DateTime ?? Date.now(),
                DateTimeOriginal: DateTimeOriginal ?? Date.now(),
                latitude: latitude ?? 0,
                longitude: longitude ?? 0,
                Make: Make ?? '',
                Model: Model ?? ''
              };

              resolve(filteredExifData);
            }
          });
        });
      });

      try {
        const results = await Promise.all(exifDataPromises);
        setExtractedMetadata(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (imageFiles.length > 0) {
      extractExifData();
    }
  }, [imageFiles]);

  return (
    <div className="">
      <div
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0'
        } w-96 h-fit p-4 bg-gradient-to-b from-[#7662ae] to-[#727dde] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] shadow-md shadow-slate-600 rounded-2xl fixed rounded-br-[32px] right-4 bottom-24 md:right-16 md:bottom-[8.6vh] z-10 transition-opacity duration-200 flex-col flex items-center justify-between`}
      >
        <p className="text-2xl font-semibold text-slate-50">사진 업로드 하기</p>

        <div>
          <label
            className="mb-1 inline-block text-slate-50"
            htmlFor="file_input"
          >
            업로드할 사진을 골라주세요.
          </label>
          {imageFiles.length > 0 && (
            <div className="flex flex-col mb-1 gap-1">
              <img
                src={URL.createObjectURL(imageFiles[previewIndex])}
                alt="image-preview"
                className="border-2 rounded-md max-h-64 object-contain"
              />
              {imageFiles.length > 1 && (
                <div className="h-full flex border p-1 w-full rounded-md items-center justify-center">
                  <button
                    onClick={prevBtnClick}
                    className="h-full text-slate-50 w-1/2 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18M6 12L11 7M6 12L11 17"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextBtnClick}
                    className="h-full text-slate-50 w-1/2 flex items-center justify-center border-l"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 12H18M18 12L13 7M18 12L13 17"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}
          <input
            disabled={isLoading}
            onChange={handleImageChange}
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-slate-50 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-slate-50 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-slate-50 focus:shadow-te-primary focus:outline-none "
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            multiple
          />

          <p className="mt-1 text-base text-slate-50" id="file_input_help">
            (PNG, JPG, JPEG를 지원합니다.)
          </p>
        </div>

        {/* metadata로 가져오는 위치 구/동 표기하고, 다른 구/동으로 변경할 수 있도록 드롭다운 등으로 표기 */}

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="mt-2 text-base px-2 py-1 text-slate-50 border border-slate-50 rounded-md hover:bg-slate-50 hover:text-purple-900"
        >
          업로드 하기
        </button>
      </div>
      <button
        onClick={handleButtonClick}
        className="flex h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-b from-[#7662ae] to-[#727dde] shadow-md shadow-slate-600 justify-center items-center fixed right-4 bottom-24 md:right-16 md:bottom-[8.6vh] z-20"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isOpen ? 'rotate-45' : ''
          } transition-transform duration-200`}
        >
          <path
            d="M25.5 13C25.5 13.3978 25.342 13.7794 25.0607 14.0607C24.7794 14.342 24.3978 14.5 24 14.5H14.5V24C14.5 24.3978 14.342 24.7794 14.0607 25.0607C13.7794 25.342 13.3978 25.5 13 25.5C12.6022 25.5 12.2206 25.342 11.9393 25.0607C11.658 24.7794 11.5 24.3978 11.5 24V14.5H2C1.60218 14.5 1.22064 14.342 0.93934 14.0607C0.658035 13.7794 0.5 13.3978 0.5 13C0.5 12.6022 0.658035 12.2206 0.93934 11.9393C1.22064 11.658 1.60218 11.5 2 11.5H11.5V2C11.5 1.60218 11.658 1.22064 11.9393 0.93934C12.2206 0.658035 12.6022 0.5 13 0.5C13.3978 0.5 13.7794 0.658035 14.0607 0.93934C14.342 1.22064 14.5 1.60218 14.5 2V11.5H24C24.3978 11.5 24.7794 11.658 25.0607 11.9393C25.342 12.2206 25.5 12.6022 25.5 13Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default ImageUploadModal;
