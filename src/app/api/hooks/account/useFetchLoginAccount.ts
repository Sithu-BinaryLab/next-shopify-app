import Cookies from "js-cookie";
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
      Cookies.set("auth_token", data.token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
    },
  });
};

export default useFetchLoginAccount;
