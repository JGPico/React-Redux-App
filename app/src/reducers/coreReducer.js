import { FETCH_CHARACTER_START,
         FETCH_CHARACTER_SUCCESS, 
         FETCH_CHARACTER_FAILURE } from "../actions/coreActions";

export const initialState = {
    char: [],
    error: '',
    isFetching: false
}

export const coreReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTER_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_CHARACTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        case FETCH_CHARACTER_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                char: action.payload
            }        
        default:
            return state;
    }
}