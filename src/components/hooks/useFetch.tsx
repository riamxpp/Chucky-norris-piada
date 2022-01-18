import { useState, useCallback } from "react";

const useFetch = (link: string, options?: {}) => {
  const [loading, setLoading] = useState(false);

  const request = useCallback(async () => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(link, options);
      json = await response.json();
    } catch (err) {
      json = null;
    } finally {
      setLoading(false);
      return { response, json };
    }
  }, [link, options]);

  return {
    loading,
    request,
  };
};

export default useFetch;
