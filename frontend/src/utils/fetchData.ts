import axios from "axios";

export async function fetchData(url: string, headers: any = {}) {
  try {
    const response = await axios.get(url, headers);
    return response;
  } catch (error) {
    console.error("[ERROR] FETCHING ERROR");
    return null;
  }
}
