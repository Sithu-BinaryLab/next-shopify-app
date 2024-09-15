import { axiosInstance } from "@/lib/axiosInstance";
import { ProductResponse } from "@/app/type/product";

export const fetchGetInCategoires = async (
  item: string | string[]
): Promise<ProductResponse> => {
  try {
    const { data } = await axiosInstance.get<ProductResponse>(
      `products/category/${item}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
