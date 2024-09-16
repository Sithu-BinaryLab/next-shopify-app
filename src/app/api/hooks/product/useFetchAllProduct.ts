import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchAllProduct } from "@/app/api/mutations/product/fetchAllProduct";
import { ProductResponse } from "@/app/type/product";

export const useFetchAllProduct = (
  sortType: string
): UseQueryResult<ProductResponse, Error> => {
  return useQuery<ProductResponse, Error>({
    queryKey: ["all product data list", sortType],
    queryFn: () => fetchAllProduct(sortType),
    retry: 1,
  });
};
