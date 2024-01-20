import axios from 'axios';

export const getPresignedUrl = async (fileData: any) => {
  try {
    const response = await axios.post('/file/presigned', fileData);

    return response.data;
  } catch (error: any) {
    return {
      error: true,
      message: error.message
    };
  }
};

export const s3ImageUpload = async (presignedUrl: string, uploadFile: File) => {
  try {
    const response = await axios.put(presignedUrl, uploadFile);

    return {
      success: true,
      data: response.data
    };
  } catch (error: any) {}
};
