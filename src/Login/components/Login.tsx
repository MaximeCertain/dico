import {ChangeEvent, FC, useState} from "react";
import {login, logout} from "../actions/auth";
import {useDispatch, useSelector} from "react-redux";

const Login: FC = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoggedIn} = useSelector((state: any) => state.auth);

    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            e.target.name === "username" ? setUsername(value) : setPassword(value);
            console.log(username + password)
        }

    const log = async () => {
        await dispatch(login(username, password));
    }
    const logout_user = () => {
        dispatch(logout())

    }

    console.log(isLoggedIn);
    return (
        <>
            {!isLoggedIn && <>
                <input name={"username"} onChange={handleChange}/>
                <input name={"password"} onChange={handleChange}/>
                <button onClick={log}>Login</button>
            </>}

            {isLoggedIn && <button onClick={logout_user}>Logout</button>}

        </>
    )

}

export default Login;