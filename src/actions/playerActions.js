import { createStore } from "redux";

export default function playerMessageLog (message) {
	// tady mas action creator, ktery ti dava nejaky typ akce a muze posilat i payload(data)
	// pokud bys ta data chtel nejak zpracovat, tak ja osobne bych to delal v action creatoru, v reduceru bych jen ukladal stav
	// musis ty action pojmenovat stejne jako case uvnitr reduceru, ktery ma tento action poslouchat (subscribe)
	return { type : 'PLAYER_LOG', payload : message};
}

export default function playerDeleteMessage () {
	//nemusis v kazdem pripade davat payload
	return { type : 'PLAYER_LOG' };
}