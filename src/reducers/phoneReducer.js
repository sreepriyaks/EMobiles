import { FETCH_PHONE_BY_ID_SUCCESS } from '../actions/actionTypes';

const initialState = {};

const PhoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PHONE_BY_ID_SUCCESS:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}

export default PhoneReducer;