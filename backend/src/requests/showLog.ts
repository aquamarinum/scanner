export function showLog(
  method: "GET" | "POST" | "PULL" | "DELETE",
  data?: any
) {
  const date = new Date();
  console.log(
    "[" +
      method +
      "] " +
      " [" +
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString() +
      "] " +
      data
  );
}
