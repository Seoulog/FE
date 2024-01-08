/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { defaultAxios } from '../../utils/axios';
import axios from 'axios';

const ImageUploadModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<any>(null);
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleImageChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/file/presigned',
        {
          fileName: selectedFile?.name,
          fileType: selectedFile?.type
        }
      );

      const { url } = response.data;
      console.log(response.data);

      const res = await axios.put(url, selectedFile, {
        headers: {
          'Content-Type': selectedFile.type
        }
      });

      alert('File uploaded successfully!');
      return res;
    } catch (error) {
      console.error('Error uploading file: ', error);
      alert('Error uploading file. Please try again.');
    }
  };

  return (
    <div className="hidden lg:block ">
      <div
        className={`${
          isOpen ? 'opacity-100' : 'opacity-0'
        } w-96 h-fit p-4 bg-gradient-to-b from-[#7662ae] to-[#727dde] shadow-md shadow-slate-600 rounded-2xl fixed right-16 bottom-[16vh] transition-opacity duration-200 flex-col flex items-center justify-between`}
      >
        <p className="text-2xl font-semibold text-slate-50">사진 업로드 하기</p>

        <div>
          <label
            className="mb-1 inline-block text-slate-50"
            htmlFor="file_input"
          >
            업로드할 사진을 골라주세요.
          </label>
          {imageUrl !== '' && (
            <img
              src={imageUrl}
              alt="image-preview"
              className="border-2 rounded-md mb-2"
            />
          )}
          <input
            onClick={handleImageChange}
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-slate-50 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-slate-50 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-slate-50 focus:shadow-te-primary focus:outline-none "
            id="file_input"
            type="file"
            accept="image/*"
          />

          <p className="mt-1 text-base text-slate-50" id="file_input_help">
            (SVG, PNG, JPG 를 지원합니다.)
          </p>
        </div>

        {/* metadata로 가져오는 위치 구/동 표기하고, 다른 구/동으로 변경할 수 있도록 드롭다운 등으로 표기 */}

        <button
          onClick={handleSubmit}
          className="mt-2 text-base px-2 py-1 text-slate-50 border border-slate-50 rounded-md hover:bg-slate-50 hover:text-purple-900"
        >
          업로드 하기
        </button>
      </div>
      <button
        onClick={handleButtonClick}
        className="flex h-16 w-16 rounded-full bg-gradient-to-b from-[#7662ae] to-[#727dde] shadow-md shadow-slate-600 justify-center items-center fixed right-16 bottom-[8.6vh]"
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
