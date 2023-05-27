import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch, onChange, random }) {
  return (
    <div className={style.barra}>
      <input
        className={style.input}
        placeholder="Buscar..."
        type="search"
        onChange={onChange}
      />
      <button className={style.button} onClick={onSearch}>
        Agregar
      </button>
      <div className={style.buttonContainer}>
        <button className={style.randomButton} onClick={random}>
          Personaje random
        </button>
      </div>
    </div>
  );
}
