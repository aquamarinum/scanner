import axios from "axios";

export async function getData(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("[ERROR] FETCHING ERROR");
    return null;
  }
}
