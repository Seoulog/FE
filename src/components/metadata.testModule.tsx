import React, { useState, type ChangeEvent } from 'react';
import EXIF from 'exif-js';

const ImageMetadataViewer: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: any = e.target.files?.[0];

    if (file !== undefined) {
      setImageFile(file);

      // Read image Exif data
      EXIF.getData(file, function () {
        const exifData = EXIF.getAllTags(this);
        console.log('L:', exifData.GPSLatitude);
        console.log('LREF:', exifData.GPSLatitudeRef);
        console.log('R:', exifData.GPSLongitude);
        console.log('RREF:', exifData.GPSLongitudeRef);
        console.log(
          convertDMSArrayToCoordinates(
            [...exifData.GPSLatitude, exifData.GPSLatitudeRef] as [
              number,
              number,
              number,
              'N' | 'S'
            ],
            [...exifData.GPSLongitude, exifData.GPSLongitudeRef] as [
              number,
              number,
              number,
              'E' | 'W'
            ]
          )
        );
      });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageFile !== null && (
        <div>
          <h4>Selected Image:</h4>
          <img src={URL.createObjectURL(imageFile)} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageMetadataViewer;

interface Coordinates {
  latitude: number;
  longitude: number;
  latitudeRef?: 'N' | 'S';
  longitudeRef?: 'E' | 'W';
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
  latitudeArray: [number, number, number, 'N' | 'S'],
  longitudeArray: [number, number, number, 'E' | 'W']
): Coordinates | null {
  if (latitudeArray.length !== 4 || longitudeArray.length !== 4) {
    console.error(
      'Invalid input arrays. Each array should contain degrees, minutes, seconds, and direction.'
    );
    return null;
  }

  const latitude = convertDegreesMinutesSecondsToDecimal(...latitudeArray);
  const longitude = convertDegreesMinutesSecondsToDecimal(...longitudeArray);

  return {
    latitude,
    latitudeRef: latitudeArray[3],
    longitude,
    longitudeRef: longitudeArray[3]
  };
}
