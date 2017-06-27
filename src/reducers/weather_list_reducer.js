import {FETCH_WEATHER} from '../action/index';
export default  function WeatherListReducer(state= [],action){
    if(action.payload!=undefined)
        console.log(action.payload.data);
    switch (action.type){
        case FETCH_WEATHER:
            return [...state,action.payload.data];
    }
    return state;
}