import { combineReducers } from "redux";
import heroReducer from "./heroReducer";

const rootReducer = combineReducers({
    heros: heroReducer
})

export default rootReducer