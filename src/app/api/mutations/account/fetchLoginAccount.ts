import { axiosInstance } from "@/lib/axiosInstance";
import { LoginRequest } from "@/app/type/account";

export const fetchLoginAccount = async (body: LoginRequest) => {
  try {
    const payload = {
      username: body.username,
      password: body.password,
    };
    const { data } = await axiosInstance.post("/auth/login", payload);
    return data;
  } catch (error) {
    console.log("Error when login Account : ", error);
    throw error;
  }
};
