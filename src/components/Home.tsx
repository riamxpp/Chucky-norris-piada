import Joke from "./Joke";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { jokes } from "./SendJoke";

const Home = () => {
  const [changedJoke, setChangedJoke] = useState<string>("");

  const { date, loading, error, updateJoke } = Joke();
  function saveJokeOnList(): void {
    jokes.push(date[0].value);
    console.log(jokes);
  }

  function changeActualJoke(): void {
    updateJoke();
    setChangedJoke(date[0].value);
  }

  if (date.length === 0) return null;
  if (loading) return <div className={style.loading}>Loading...</div>;
  if (error) return <div>Error!!!</div>;
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.joke}>
          {changedJoke ? changedJoke : date[0].value}
        </div>
        <div className={style.options}>
          <button className={style.button} onClick={changeActualJoke}>
            Gerar piada
          </button>
          <button className={style.button} onClick={() => saveJokeOnList()}>
            Salvar piada
          </button>
          <Link to="saves" className={`${style.saves} ${style.button}`}>
            Ver piada salvar
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
