import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchProductById } from "@/app/api/mutations/product/fetchProductById";
import { Product } from "@/app/type/product";

const useFetchProductById = (id: number): UseQueryResult<Product, Error> => {
  return useQuery<any>({
    queryKey: ["products by id", id],
    queryFn: () => fetchProductById(id),
    enabled: !!id,
    retry: 1,
  });
};

export default useFetchProductById;
