import style from "./AboutText.module.css";

const AboutText = () => {
  return (
    <>
      <div className={style.textContainer}>
        <p>
          Mi nombre es Moira Magalí Brun. Vivo en Argentina. Soy estudiante de
          la carrera FullStack Web Developer. Descubrí en la programación un
          mundo apasionante y desafiante.
        </p>
        <p>
          Esta es una SPA creada con REACT, REDUX, CSS, Express y Sequelize, entre otras herramientas,
          donde podrás agregar las cards de los personajes de la serie Rick and Morty
          y visualizar su respectiva ficha de datos haciendo click sobre el nombre del personaje.
          También podrás guardar y filtrar a tus personajes favoritos.
        </p>
        <p>Que la disfrutes!</p>
      </div>
    </>
  );
};

export default AboutText;
