import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={style.cards}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          character={character}
          onClose={onClose}
        />

        // name= {character.name} species= {character.species} gender= {character.gender} image= {character.image}/>
      ))}
    </div>
  );
}
