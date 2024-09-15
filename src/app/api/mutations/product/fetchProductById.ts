import { axiosInstance } from "@/lib/axiosInstance";
import { Product } from "@/app/type/product";

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const { data } = await axiosInstance.get<Product>(`products/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
