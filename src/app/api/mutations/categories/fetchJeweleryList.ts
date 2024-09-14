import { axiosInstance } from "@/lib/axiosInstance";

export const fetchJeweleryList = async (): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>(
      "/products/category/jewelery?limit=1"
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
