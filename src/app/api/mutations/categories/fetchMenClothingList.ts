import { axiosInstance } from "@/lib/axiosInstance";

export const fetchMenClothingList = async (): Promise<any> => {
  try {
    const { data } = await axiosInstance.get<any>(
      "/products/category/men's%20clothing?limit=1"
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
