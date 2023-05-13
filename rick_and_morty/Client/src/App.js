import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import About from "./Views/About/About";
import Home from "./Views/Home/Home";
import Nav from "./components/NavBar/Nav";
import Favorites from "./Views/Favorites/Favorites"
import Detail from "./Views/Detail/Detail";
import ErrorPage from "./Views/ErrorPage/ErrorPage";
import Form from "./components/Form/Form";



function App() {
  const [characters, setCharacters] = useState([]); //CREA EL ESTADO CHARACTERS
  const [input, setInput] = useState(""); //CREA EL ESTADO INPUT

  const location = useLocation();

  //LOGIN
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  // const email = "ejemplo@gmail.com";
  // const password = "1password";

//async-await
async function login(userData) {
  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  try {
    const response = await axios.get(URL + `?email=${email}&password=${password}`)
    // .then(({ data }) => {
       const { access } = response.data;
       setAccess(response.data);
       access && navigate('/home');
    
  } catch (error) {
    window.alert('error: ' + error.message)
  }
  // });
}

  //express
//   function login(userData) {
//     const { email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//        const { access } = data;
//        setAccess(data);
//        access && navigate('/home');
//     });
//  }

 //webserver
  // function login (userData) {
  //   if (userData.password === password && userData.email === email) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }


  //LOGOUT
  function logout (event) {
    setAccess(false);
    navigate("/")
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access])

  //FUNCION PARA DETECTAR EL CAMBIO EN EL INPUT Y GUARDARLO
  function onChange(event) {
    event.preventDefault();
    let inputValue = event.target.value; //GUARDA EL VALOR DEL INPUT
    setInput(inputValue); //SE LO PASA A LA FUNC Q MODIFICA INPUT
  }


  //ASYNC-AWAIT
  async function onSearch(event) {
    event.preventDefault(); //PARA EVITAR Q SE RECARGUE SOLA LA PAG Y PERDER LA INFO
    try {
      let found = characters.find((character) => character.id === Number(input));
      if (!found){
      const response = await axios.get(`http://localhost:3001/rickandmorty/character/${input}`)
      // fetch(`https://rickandmortyapi.com/api/character/${input}`) //PEDIDO AL SERVER
          // RESPUESTA CONVERTIDA
          if (response.data.name) {
            //SI ENCUENTRA EL PERSONAJE CON EL ID PASADO POR INPUT
            setCharacters((oldChars) => [...oldChars, response.data]); //LO AGREGA AL ARRAY CHARACTERS
          } else {
            // SI NO LO ENCUENTRA
            window.alert("No hay personajes con ese ID"); //DEVUELVE UN ALERT
          }
        }
    }
        catch (error) {
      error(error.message);
    }
  }


  //FUNCION PARA BUSCAR EN EL SERVER Y AGREGAR EL PERSONAJE
  // function onSearch(event) {
  //   event.preventDefault(); //PARA EVITAR Q SE RECARGUE SOLA LA PAG Y PERDER LA INFO
  //   let found = characters.find((character) => character.id === Number(input));
  //   if (!found) {
  //     fetch(`http://localhost:3001/rickandmorty/character/${input}`)
  //     // fetch(`https://rickandmortyapi.com/api/character/${input}`) //PEDIDO AL SERVER
  //       .then((response) => response.json()) //CONVIERTE LA RPTA A JSON
  //       .then((data) => {
  //         // RESPUESTA CONVERTIDA
  //         if (data.name) {
  //           //SI ENCUENTRA EL PERSONAJE CON EL ID PASADO POR INPUT
  //           setCharacters((oldChars) => [...oldChars, data]); //LO AGREGA AL ARRAY CHARACTERS
  //         } else {
  //           // SI NO LO ENCUENTRA
  //           window.alert("No hay personajes con ese ID"); //DEVUELVE UN ALERT
  //         }
  //       });
  //   } else {
  //     window.alert("El personaje ya fue agregado");
  //   }
  // }

  //FUNCION DE CERRAR
  function onClose(id) {
    //le paso el id del personaje
    let found = characters.find((character) => character.id === id); //si encuentra que el personaje tiene ese id
    let deleted = characters.filter((character) => character.id !== found.id); //devuelve un nuevo array con todos los personajes que no tengan el id encontrado
    setCharacters(deleted); //le paso el nuevo array a setCharacters para que modifique el array characters
  }

  //FUNCION CARD RANDOM

  function random() {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed(); //busca un nro random entre 0 y 826, to fixed devuelve si o si un entero
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`) //PEDIDO AL SERVER
        .then((response) => response.json()) //CONVIERTE LA RPTA A JSON
        .then((data) => {
          // RESPUESTA CONVERTIDA
          if (data.name) {
            //SI ENCUENTRA EL PERSONAJE CON EL ID PASADO POR INPUT
            setCharacters((oldChars) => [...oldChars, data]); //LO AGREGA AL ARRAY CHARACTERS
          } else {
            // SI NO LO ENCUENTRA
            window.alert("No hay personajes con ese ID"); //DEVUELVE UN ALERT
          }
        });
    } else {
      window.alert("Ya agregaste a todos los personajes");
    }
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && (
      <Nav 
      onSearch={onSearch}
      onChange={onChange}
      random={random}
      logout= {logout} 

      /> 
  )}
      
      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/Home" element={<Home characters={characters} onClose={onClose}/>} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
