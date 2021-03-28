import {combineReducers} from "redux";
import auth from "../Login/reducers/auth";
import translate from "../Translation/reducers/translations";

export default combineReducers({
    auth,
    translate
});