import style from "./Favorites.module.css";
// import { connect } from "react-redux"
import Cards from "../../components/Cards/Cards";
import { orderCards, filterCards, showAllFavorites } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  function order(event) {
    dispatch(orderCards(event.target.value));
  }

  function filter(event) {
    dispatch(filterCards(event.target.value));
  }

  function reset() {
    dispatch(showAllFavorites());
  }

  return (
    <div>
      <select placeholder="Order" onChange={order} className={style.select}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select placeholder="Gender" onChange={filter} className={style.select}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>

      <button value="reset" onClick={reset} className={style.reset}>
        Reset
      </button>

          <Cards characters={favorites} />

    </div>
  );
};

// onClose={onClose}
// {/* <Cards characters = {favorites} /> */}
export default Favorites;

// const mapStateToProps = (state) => {
//     return {
//       myFavorites: state.myFavorites
//     }
//   }

//   export default connect(mapStateToProps)(Favorites)
