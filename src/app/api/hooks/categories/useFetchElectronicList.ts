import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchElectronicList } from "@/app/api/mutations/categories/fetchElectronicsList";

export const useFetchElectronicList = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ["all electronic data list"],
    queryFn: fetchElectronicList,
    retry: 1,
  });
};
