import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchJeweleryList } from "@/app/api/mutations/categories/fetchJeweleryList";
import { ProductResponse } from "@/app/type/product";

export const useFetchJeweleryList = (): UseQueryResult<
  ProductResponse,
  Error
> => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["all jewelery data list"],
    queryFn: fetchJeweleryList,
    retry: 1,
  });
};
