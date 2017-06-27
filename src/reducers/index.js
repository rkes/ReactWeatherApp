import {combineReducers} from 'redux';
import weatherListReducer from './weather_list_reducer';
const rootReducer=combineReducers({
    weather:weatherListReducer
});
export  default rootReducer;