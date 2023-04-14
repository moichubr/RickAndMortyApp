import style from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions";
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';

 function Card(props) {
  const navigate = useNavigate();
  const { character, onClose, addFavorite, removeFavorite, myFavorites} = props;
  const [closeBtn, setCloseBtn] = useState(true);
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, []);
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if(fav.id === character.id){
        setIsFav(true);
      }
    });
  }, [myFavorites]);


  function changeNavigate(){
    navigate(`/detail/${character.id}`)
  }
 
  function handleFavorite (data) { //data puede ser character.id o character
    if (isFav) {
      removeFavorite(data); //cambia a character.id
      setIsFav(false);
    } else {
      addFavorite(data); //cambia a character 
      setIsFav(true);
    }
  }

  return (
    <div className={style.card}>
      {closeBtn ? (
      <button className={style.close} onClick={() => onClose(character.id)}>
        X
      </button> )
      : null
      }
      <div className={style.nameContainer}>
        <h2 className={style.name} onClick={changeNavigate}> {character.name}
          {/* <Link to={`/detail/${id}`}> {character.name}</Link> */}
        </h2>
      </div>

      <img className={style.img} src={character.image} alt="personaje" />
      {isFav ? (
         <button className={style.buttonHeart} onClick={()=>handleFavorite(character.id)}>❤️</button>
      ) : (
         <button className={style.buttonHeart} onClick={()=>handleFavorite(character)}>🤍</button>
      )}


      
      <div className={style.info}>
        <h3>{character.species}</h3>
        <h3>{character.gender}</h3>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => { //siempre recibe dispatch como argumento
  return { //retorna un objeto donde cada propiedad es una funcion que hace dispatch de la action pasandole el argumento que pide. Puedo utilizar a las acciones como props luego en el componente
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id))
  }

};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)