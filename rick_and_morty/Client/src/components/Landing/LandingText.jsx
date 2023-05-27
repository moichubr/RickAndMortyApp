import style from "./LandingText.module.css";
// import {Link} from 'react-router-dom'

const LandingText = () => {
  return (
    <>
      <div className={style.texto}>
        <h1>Bienvenid@ a la App de Rick and Morty</h1>
        <h3>de Moira Magalí Brun</h3>
      </div>

      {/* <Link to='/Home'>
        <button className={style.ingresar}>INGRESAR</button>
        </Link> */}
    </>
  );
};

export default LandingText;
