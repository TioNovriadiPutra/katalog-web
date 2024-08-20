import { API_ENDPOINT } from "@/configs/api";
import { axiosInstance } from "@/configs/axios";

export const getPM2Status = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT.pm2Status);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getPM2Log = async (data) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.pm2Log, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const stopPM2 = async (data) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.stopPm2, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const startPM2 = async (data) => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.startPm2, data);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
