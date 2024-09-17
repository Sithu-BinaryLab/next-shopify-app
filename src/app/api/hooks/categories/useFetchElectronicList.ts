import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchElectronicList } from "@/app/api/mutations/categories/fetchElectronicsList";
import { ProductResponse } from "@/app/type/product";

export const useFetchElectronicList = (): UseQueryResult<
  ProductResponse,
  Error
> => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["all electronic data list"],
    queryFn: fetchElectronicList,
    retry: 1,
  });
};
