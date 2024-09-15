import { fetchLoginAccount } from "@/app/api/mutations/account/fetchLoginAccount";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/app/type/account";

const useFetchLoginAccount = () => {
  return useMutation({
    mutationFn: (body: LoginRequest) => fetchLoginAccount(body),
  });
};

export default useFetchLoginAccount;
