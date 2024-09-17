import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchCategoires } from "@/app/api/mutations/categories/fetchCategories";

export const useFetchCategories = (): UseQueryResult<string[], Error> => {
  return useQuery<string[], Error>({
    queryKey: ["categories data list"],
    queryFn: fetchCategoires,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
};
