import { axiosInstance } from "@/lib/axiosInstance";

export const fetchElectronicList = async (): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>(
      "/products/category/electronics?limit=1"
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
