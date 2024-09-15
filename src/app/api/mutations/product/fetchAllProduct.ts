import { axiosInstance } from "@/lib/axiosInstance";
import { ProductResponse } from "@/app/type/product";

export const fetchAllProduct = async (): Promise<ProductResponse> => {
  try {
    const { data } = await axiosInstance.get<ProductResponse>("/products");
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
