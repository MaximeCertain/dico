import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from "./type";
import {firebase_app} from "../../firebase/firebase.config";


export const login = (username: string, password: string) => (dispatch: any) => {
    return logService(username, password).then((response: any) => {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {user: response}
        })
        console.log("ok")
        return Promise.resolve();
    }, (error: any) => {
        console.log(error)
        dispatch({
            type: LOGIN_FAIL
        })
        return Promise.reject();
    });
}


const logService = async (login: string, password: string) => {
    await firebase_app
        .auth()
        .signInWithEmailAndPassword(login, password);

    await firebase_app.auth().onAuthStateChanged((user) => {
        if (user) {
            console.log(user)
        }
    });
};

export const logout =  () => async (dispatch: any) => {
    await firebase_app.auth().signOut().then((response: any) => {   
        dispatch({
            type: LOGOUT
        })
    })

}