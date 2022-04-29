import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(
    () => async () => {
      const response = await fetch(url);

      if (!response.ok) {
        const message = `An error has ocurred ${response.status}`;
        throw new Error(message);
      }

      const responseJSON = await response.json();
      setData(responseJSON);
      setIsPending(false);
      
    },[url]);

  return {data, isPending}
};
