import {combineReducers} from "redux";
import UserReducer from "./UserReducer";

let Reducer = combineReducers({
    user: UserReducer
})

export default Reducer;
