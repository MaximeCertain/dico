import {ChangeEvent, FC, FormEvent, useState} from "react";
import {db} from "../../../firebase/firebase.config";

const AddTranslation: FC = () => {

    const [key, setKey] = useState('');
    const [value, setValue] = useState('');

    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            e.target.name === "key" ? setKey(value) : setValue(value);
        }

    const save = async () => {
        let transaltionCol = await db.collection("translations");
        await transaltionCol.add({
            key: key, value: value
        })
    }

    return (
        <div>
            <input name={"key"} onChange={handleChange}/>
            <input name={"value"} onChange={handleChange}/>
            <button onClick={save}>Enregistrer</button>
        </div>)
}

export default AddTranslation;