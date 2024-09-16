import { axiosInstance } from "@/lib/axiosInstance";
import { AccountResponse } from "@/app/type/account";

export const fetchAccount = async (id: number): Promise<AccountResponse> => {
  try {
    const { data } = await axiosInstance.get<AccountResponse>(`users/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
