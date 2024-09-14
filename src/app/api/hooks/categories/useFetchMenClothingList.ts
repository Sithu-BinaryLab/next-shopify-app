import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchMenClothingList } from "@/app/api/mutations/categories/fetchMenClothingList";

export const useFetchMenClothingList = (): UseQueryResult<any, Error> => {
  return useQuery<any, Error>({
    queryKey: ["all men clothing data list"],
    queryFn: fetchMenClothingList,
    retry: 1,
  });
};
