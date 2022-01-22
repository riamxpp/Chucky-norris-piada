import React, { useEffect, useState } from "react";
import { JokeResult } from "./interfaces/JokeResult";

const Home = () => {
  const [date, setDate] = useState<JokeResult[]>([]);
  useEffect(() => {
    async function request() {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const json = await response.json();
      if (response.ok) {
        setDate([json.id, json.value, json.created_at]);
        console.log(json);
      }
    }
    request();
  }, []);

  return <div>{date && <p>{date[1]}</p>}</div>;
};
export default Home;
