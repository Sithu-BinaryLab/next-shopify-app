import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchJeweleryList } from "@/app/api/mutations/categories/fetchJeweleryList";

export const useFetchJeweleryList = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ["all jewelery data list"],
    queryFn: fetchJeweleryList,
    retry: 1,
  });
};
