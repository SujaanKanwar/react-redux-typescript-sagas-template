const serviceURL =
  process.env.SERVICE_URL;
export default function apiCaller<T>(
  method: string,
  path: string,
  data?: any
): Promise<T[] | null> {
  return fetch(serviceURL + path, {
    method,
    headers: {
      "Accept": "application/json",
      "content-type": "application/json",
    },
    body: data ? JSON.stringify(data) : null,
  }).then((res) => res.json());
}
