import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducers } from "./reducers/authReducers";

const mainReducers = combineReducers({
    auth:authReducers

})

const mainStore = createStore(
    mainReducers,
    {},composeWithDevTools(applyMiddleware(thunk))
)

export default mainStore