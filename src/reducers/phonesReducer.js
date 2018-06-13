import { FETCH_PHONES_SUCCESS, SAVE_NEW_PHONE_SUCCESS } from '../actions/actionTypes';

const initialState = {};

const PhonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHONES_SUCCESS:
            return ({ ...state }, action.payload);

        case SAVE_NEW_PHONE_SUCCESS:
            return ({ ...state }, action.payload);

        default:
            return state;
    }
};

export default PhonesReducer;