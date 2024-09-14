import { fetchLoginAccount } from "@/app/api/mutations/account/fetchLoginAccount";
import { useMutation } from "@tanstack/react-query";

const useFetchLoginAccount = () => {
  return useMutation({
    mutationFn: (body: any) => fetchLoginAccount(body),
  });
};

export default useFetchLoginAccount;
