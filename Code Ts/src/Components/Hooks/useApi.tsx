import axios, { AxiosError, type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import type { response } from "./Hooks.types";

const useApi = <T,>(url: string): response<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApi = async () => {
    setLoading(true);
    try {
      let res: AxiosResponse<T> = await axios.get(url);
      setData(res.data);
      setError(null);
    } catch (err) {
      const er = err as AxiosError;
      setError(er.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  const refetch = async () => {
    await fetchApi();
  };

  return { data, loading, error, refetch };
};

export default useApi;
