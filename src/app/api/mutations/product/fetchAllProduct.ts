import { axiosInstance } from "@/lib/axiosInstance";
import { ProductResponse } from "@/app/type/product";

export const fetchAllProduct = async (
  sortType: string
): Promise<ProductResponse> => {
  try {
    const sortQuery = sortType ? `sort=${sortType}` : "";
    const { data } = await axiosInstance.get<ProductResponse>(
      `/products?${sortQuery}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
