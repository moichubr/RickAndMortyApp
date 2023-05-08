import axios from "axios";
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SHOW_ALL_FAVORITES = 'SHOW_ALL_FAVORITES';

//express
export const addFavorite = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: 'ADD_FAVORITE',
             payload: data,
          });
       });
    };
 };
// export const addFavorite = (character) => {
//     return {
//         type: ADD_FAVORITE,
//         payload: character
//     }
// }

export const removeFavorite = (id) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
        return (dispatch) => {
           axios.delete(endpoint).then(({ data }) => {
              return dispatch({
                 type: 'REMOVE_FAVORITE',
                 payload: data,
           });
           });
        };
     };
//     return {
//         type: REMOVE_FAVORITE,
//         payload: id
//     }
// }

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}


export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}

export const showAllFavorites = () => {
    return {
        type: SHOW_ALL_FAVORITES,
    }
}