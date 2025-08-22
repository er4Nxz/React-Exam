import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchApi = async () => {
    try {
      let response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return [data, loading, error];
};

export default useApi;
