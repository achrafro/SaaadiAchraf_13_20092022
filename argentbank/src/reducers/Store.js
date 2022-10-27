import {createStore} from 'redux'
import UserReducer from './UserReducer';
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
const Store = createStore(UserReducer);


export default Store;