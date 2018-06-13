import { SEARCH_PHONE_SUCCESS } from '../actions/actionTypes';

const initialState = {};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_PHONE_SUCCESS:
            return ({ ...state }, action.payload);

        default:
            return state;
    }
};

export default SearchReducer;