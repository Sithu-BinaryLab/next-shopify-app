import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAccount } from "@/app/api/mutations/account/fetchAccount";
import { AccountResponse } from "@/app/type/account";

const useFetchAccount = (
  id: number
): UseQueryResult<AccountResponse, Error> => {
  return useQuery<any>({
    queryKey: ["account by id", id],
    queryFn: () => fetchAccount(id),
    enabled: !!id,
    retry: 1,
  });
};

export default useFetchAccount;
