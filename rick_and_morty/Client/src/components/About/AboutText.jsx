import style from "./AboutText.module.css";

const AboutText = () => {
  return (
    <>
      <div className={style.textContainer}>
        <p>
          Mi nombre es Moira Magalí Brun. Vivo en Argentina. Soy estudiante de la carrera FullStack Web Developer.
          Descubrí en la programación un mundo apasionante y desafiante.
        </p>
        <p>
          Esta es una SPA creada con REACT y REDUX donde podrás agregar las cards de los personajes de la serie Rick and Morty y visualizar su respectiva ficha de datos. También podrás seleccionar tus personajes favoritos y filtrarlos de acuerdo a su género y orden de ID.
        </p>
        <p>Espero que la disfrutes!</p>
      </div>
    </>
  );
};

export default AboutText;
