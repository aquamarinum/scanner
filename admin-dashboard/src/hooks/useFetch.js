import axios from "axios";
import { useEffect, useState } from "react";

async function getData(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("[ERROR] FETCHING ERROR");
    return null;
  }
}

export function useFetch(url, deps = []) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("[ERROR] CATCH HANDLING ERROR");
        setError(true);
      })
      .finally(() => setLoading(false));
  }, deps);

  return { data, loading, error };
}
