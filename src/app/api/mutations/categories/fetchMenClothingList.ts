import { axiosInstance } from "@/lib/axiosInstance";
import { ProductResponse } from "@/app/type/product";

export const fetchMenClothingList = async (): Promise<ProductResponse> => {
  try {
    const { data } = await axiosInstance.get<ProductResponse>(
      "/products/category/men's%20clothing?limit=1"
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
