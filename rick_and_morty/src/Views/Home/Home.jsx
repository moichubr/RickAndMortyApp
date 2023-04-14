import Cards from "../../components/Cards/Cards";

const Home = ({characters, onClose}) => {  
  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
};

export default Home;
