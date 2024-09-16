import { useAtom } from "jotai";
import { user } from "@/jotai/state";
import { fetchLoginAccount } from "@/app/api/mutations/account/fetchLoginAccount";
import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/app/type/account";

const useFetchLoginAccount = () => {
  const [, setUser] = useAtom(user);
  return useMutation({
    mutationFn: (body: LoginRequest) => fetchLoginAccount(body),
    onSuccess: (data) => {
      //id is free api limitation
      setUser({ id: 1, token: data.token });
    },
  });
};

export default useFetchLoginAccount;
