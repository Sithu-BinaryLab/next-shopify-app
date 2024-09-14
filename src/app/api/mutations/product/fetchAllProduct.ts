import { axiosInstance } from "@/lib/axiosInstance";

export const fetchAllProduct = async (): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>("/products");
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
