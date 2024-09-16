import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchGetInCategoires } from "@/app/api/mutations/categories/fetGetInCategories";
import { ProductResponse } from "@/app/type/product";

const useFetchGetInCategories = (
  item: string | string[],
  sortType: string
): UseQueryResult<ProductResponse, Error> => {
  return useQuery<ProductResponse>({
    queryKey: ["products by categories", item, sortType],
    queryFn: () => fetchGetInCategoires(item, sortType),
    enabled: !!item,
    retry: 1,
  });
};

export default useFetchGetInCategories;
