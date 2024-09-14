import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAllProduct } from "@/app/api/mutations/product/fetchAllProduct";

export const useFetchAllProduct = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ["all product data list"],
    queryFn: fetchAllProduct,
    retry: 1,
  });
};
