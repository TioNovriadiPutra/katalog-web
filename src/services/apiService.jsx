import { API_ENDPOINT } from "@/configs/api";
import { axiosInstance } from "@/configs/axios";

export const retrievePostman = async () => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.retrievePostman}?apiname=api-iserve`
    );

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
