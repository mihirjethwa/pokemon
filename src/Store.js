import {createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware} from "redux";
import rootReducer from "./Reducer/rootReducer"

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;