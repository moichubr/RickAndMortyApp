import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import style from './Detail.module.css'

const Detail = () => {
    const {detailId} = useParams() //HOOK que obtiene el id
    const [character, setCharacter] = useState({
      // name:'',
      // status:'',
      // specie:'',
      // gender:'',
      // origin:{},
      // image:''
    });

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
      <>

      <div className={style.container}>
      <div className={style.principal}>
      <h1 className={style.name}>{character.name}</h1>
      <img className={style.img} src={character.image} alt={character.name}/>
      </div>

      <div className={style.info}>
      <h3 className={style.status}>Status: {character.status}</h3>
      <h3>Specie: {character.species}</h3>
      <h3>Gender: {character.gender}</h3>
      <h3>Origin: {character.origin && character.origin.name}</h3>
      <h3>Location: {character.location && character.location.name}</h3>
      
      <Link to='/Home'>
      <button className={style.back}>HOME</button>
      </Link>
      </div>

      </div>  
      </> 
    )
}

export default Detail