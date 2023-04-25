import SearchBar from "../SearchBar/SearchBar.jsx";
import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch, onChange, random, logout }) {
  return (
    <>
      <div className={style.navBar}>
        <div className={style.nav}>
          <NavLink to="/Home">
            <p>HOME</p>
          </NavLink>

          <NavLink to="/Favorites">
            <p>FAVORITES</p>
          </NavLink>

          <NavLink to="/About">
            <p>ABOUT</p>
          </NavLink>

          <NavLink to="/" onClick={logout}>
            <p>LOG OUT</p>
          </NavLink>
        </div>

          <SearchBar onSearch={onSearch} onChange={onChange} random={random} />
      </div>
    </>
  );
}
