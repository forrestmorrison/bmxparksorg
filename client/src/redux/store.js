import { configureStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
import state from './state';

export default configureStore(reducers, state, applyMiddleware(thunk));