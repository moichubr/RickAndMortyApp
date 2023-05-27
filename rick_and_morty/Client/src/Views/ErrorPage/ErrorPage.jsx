import style from "./ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={style.error}>
      <h1>404 ERROR</h1>
      <h2>Upss! No hay nada por aquí. Intentalo otra vez.</h2>
    </div>
  );
};

export default ErrorPage;
