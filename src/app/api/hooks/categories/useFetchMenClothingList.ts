import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchMenClothingList } from "@/app/api/mutations/categories/fetchMenClothingList";
import { ProductResponse } from "@/app/type/product";

export const useFetchMenClothingList = (): UseQueryResult<
  ProductResponse,
  Error
> => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["all men clothing data list"],
    queryFn: fetchMenClothingList,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
