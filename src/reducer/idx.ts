import { combineReducers } from "redux";
import { userReducer } from "./userReduce";


const reducers = combineReducers({
    auth: userReducer
})


export default reducers;