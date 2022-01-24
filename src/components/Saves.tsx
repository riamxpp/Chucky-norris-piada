import { jokes } from "./SendJoke";
import style from "./Saves.module.css";
import { Link } from "react-router-dom";

const Saves = () => {
  console.log(jokes);
  return (
    <div>
      {jokes.length > 0 ? (
        <div className={style.saves}>
          {jokes.map((item) => (
            <div className={style.joke}>
              <p>{item}</p>
            </div>
          ))}
          <Link to="/" className={style.voltar}>
            Voltar
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Saves;
