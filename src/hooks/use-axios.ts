import axios from "axios";
import useSWR from "swr";

const getFetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useAxios = (url: string) => {
  const { data, isValidating, mutate, error } = useSWR<any[]>(url, getFetcher);
  return { data, isValidating, mutate, error };
};
