import Joke from "./Joke";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [saveJoke, setSaveJoke] = useState<Array<string>>([]);
  const [changedJoke, setChangedJoke] = useState<string>("");

  const { date, loading, error, updateJoke } = Joke();
  function saveJokeOnList(): void {
    setSaveJoke([...saveJoke, date[0].value]);
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
          <button onClick={changeActualJoke}>Gerar piada</button>
          <button onClick={saveJokeOnList}>Salvar piada</button>
          <Link to="saves" className={style.saves}>
            Ver piada salvar
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
