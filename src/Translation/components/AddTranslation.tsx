import {ChangeEvent, FC, FormEvent, useState} from "react";
import {db} from "../../firebase/firebase.config";
import Translation from "../../domain/translation/Translation";
import {addNewTranslation} from "../actions/translations"
import {useDispatch} from "react-redux";

const AddTranslation: FC = () => {
    const dispatch = useDispatch();

    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            e.target.name === "key" ? setKey(value) : setValue(value);
        }

    const save = async () => {
        const translation = new Translation(key, value);
        dispatch(addNewTranslation(translation))
        setValue("")
        setKey("")
    }

    return (
        <>
            <input name={"key"} onChange={handleChange} value={key}/>
            <input name={"value"} onChange={handleChange} value={value}/>
            <button onClick={save}>Enregistrer</button>
        </>)
}

export default AddTranslation;