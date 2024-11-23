import { useEffect, useState } from "react";

export function useFetch<T>(url: string, deps: Array<string | number>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<T>();

  useEffect(() => {
    // async call function
  }, deps);

  return { data, loading, error };
}
