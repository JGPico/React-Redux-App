import axios from 'axios';

export const FETCH_CHARACTER_START = 'FETCH_CHARACTER_START';
export const FETCH_CHARACTER_SUCCESS = 'FETCH_CHARACTER_SUCCESS';
export const FETCH_CHARACTER_FAILURE = 'FETCH_CHARACTER_FAILURE';

export const getChar = () => dispatch => {
    dispatch({ type: FETCH_CHARACTER_START });
    axios.get('https://rickandmortyapi.com/api/character/')
        .then( response => {
            console.log("Response ", response);
            dispatch({ type: FETCH_CHARACTER_SUCCESS, payload: response.data.results })
        })
        .catch( error => {
            console.log("Error ", error.response);
            dispatch({ type: FETCH_CHARACTER_FAILURE, payload: `${error.response.status} 
             ${error.response.data.error}`})
        })
};

