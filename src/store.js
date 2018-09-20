import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//redux thunk je middleware na to aby sis mohl managovat actions asynchronne, nevim jestli to vyuzijes, ale to tam dam zatim
const middleware = compose(applyMiddleware(thunk));
export default createStore(reducers, middleware);
