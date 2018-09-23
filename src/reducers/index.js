import { combineReducers } from 'redux';

/*sem si dej svoje vlastni reducery, proste import a pak jen passnes jako object propery */
/*e.g. import playerReducer from "./playerReducer" ... combineReducers({playerReducer})*/
import playerReducer from './playerReducer';

// tady pak posilas ten reducer do toho store, coz je state cele aplikace
//posilam tam objekt player:playerReducer misto toho abych poslal jen playerReducer
//pokud bys tam poslal jen playerReducer, tak bys pri connectu musel volat state.playerReducer -> to ti popisu v nejake komponente
export default combineReducers({ player: playerReducer });
