import {ChangeEvent, FC, FormEvent, useState} from "react";
import {firebase_app} from "../../firebase/firebase.config"

const Login: FC = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            e.target.name === "username" ? setLogin(value) : setPassword(value);
            console.log(login + password)
        }

    const log = async () => {
        await firebase_app
            .auth()
            .signInWithEmailAndPassword(login, password);

        await firebase_app.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
            }
        });
    }

    return (
        <div>
            <input name={"username"} onChange={handleChange}/>
            <input name={"password"} onChange={handleChange}/>
            <button onClick={log}>Login</button>
        </div>)

}

export default Login;