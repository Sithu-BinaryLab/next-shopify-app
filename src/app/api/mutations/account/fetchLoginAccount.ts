import { axiosInstance } from "@/lib/axiosInstance";

export const fetchLoginAccount = async (body: any) => {
  try {
    const payload = {
      username: body.email,
      password: body.password,
    };
    const { data } = await axiosInstance.post("/auth/login", payload);
    return data;
  } catch (error) {
    console.log("Error when login Account : ", error);
    throw error;
  }
};
