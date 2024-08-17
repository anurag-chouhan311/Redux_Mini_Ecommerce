import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/main";

const store=createStore(rootReducer);


export default store;