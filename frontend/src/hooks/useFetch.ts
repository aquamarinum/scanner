import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export function useFetch<T>(
  url: string,
  deps: Array<string | number> = [],
  headers: any = {}
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    fetchData(url, headers)
      .then((res) => {
        console.log(res?.data);
      })
      .catch((err) => {
        console.log("[ERROR] CATCH HANDLING ERROR");
        setError(true);
      })
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading, error };
}
