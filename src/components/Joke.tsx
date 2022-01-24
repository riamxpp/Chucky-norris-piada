import { JokeRequest } from "./interfaces/JokeRequest";
import { useEffect, useState } from "react";
import { JokeResults } from "./interfaces/JokeResult";

const Joke = (): JokeResults => {
  const [date, setDate] = useState<JokeRequest[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [update, setUpdate] = useState<number>(0);

  useEffect(() => {
    async function request() {
      try {
        setLoading(true);
        const response = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await response.json();
        const { id, value, created_at } = json;
        const obj: JokeRequest = {
          id,
          value,
          created_at,
        };
        if (response.ok) {
          setDate([obj]);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    request();
  }, [update]);

  function updateJoke(): void {
    setUpdate(update + 1);
  }

  return {
    date,
    error,
    loading,
    updateJoke,
  };
};

export default Joke;
