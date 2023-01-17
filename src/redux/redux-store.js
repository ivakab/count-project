import { combineReducers, legacy_createStore as createStore } from "redux";
import creditReducer from "./credit-reducer";
import depositReducer from "./deposit-reducer";

const rootReducer = combineReducers({
  creditReducer,
  depositReducer,
});

const store = createStore(rootReducer);

window.store = store;

export default store;
