import { useCallback, useState } from "react";

// async function useFetch(url: string) {
//   const [data, setData] = useState({});
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .then((json) => {
//       setData(json);
//     });
//   return {
//     data,
//   };
// }

export const useFetch = (url: string) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const request = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    
  }, []);

  return {
    request,
    data,
    loading,
    error,
  };
};
