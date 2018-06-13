import { combineReducers } from 'redux';

import PhonesReducer from './phonesReducer';
import PhoneReducer from './phoneReducer';
import SearchReducer from './searchReducer';

const rootReducer = combineReducers({
    phones : PhonesReducer,
    phone : PhoneReducer,
    filteredPhones: SearchReducer
});

export default rootReducer;