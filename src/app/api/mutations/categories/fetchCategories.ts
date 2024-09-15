import { axiosInstance } from "@/lib/axiosInstance";

export const fetchCategoires = async (): Promise<string[]> => {
  try {
    const { data } = await axiosInstance.get<string[]>("/products/categories");
    return data;
  } catch (error) {
    console.error("Error fetching all categories:", error);
    throw error;
  }
};
