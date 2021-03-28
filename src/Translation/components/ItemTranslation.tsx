import {ChangeEvent, FC, useEffect, useState} from "react";
import {getTranslations, deleteTranslation} from "../actions/translations"
import {useDispatch, useSelector} from "react-redux";
import {editNewTranslation} from "../actions/translations"
import Translation from "../../domain/translation/Translation";

interface ItemTranslationProps {
    handleDelete: () => void,
    keyTranslated: string,
    valueTranslated: string,
    id: string
}

const ItemTranslation: FC<ItemTranslationProps> = ({handleDelete, keyTranslated, valueTranslated, id}) => {

    const dispatch = useDispatch();

    const [update, setUpdate] = useState(false);
    const [key, setKey] = useState(keyTranslated);
    const [value, setValue] = useState(valueTranslated);

    const handleKeyDown = (e: any) => {
        if (e.code === 'Enter') {
            const editedTranslation = new Translation(key, value);
            dispatch(editNewTranslation(editedTranslation, id))
            setUpdate(false)
        }
    }
    const handleChange =
        (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            e.target.name === "editKey" ? setKey(newValue) : setValue(newValue);
        }

    return (
        <>
            {update ?
                <>
                    <input type={"text"} value={key} onChange={handleChange} name={"editKey"}
                           onKeyPress={handleKeyDown}/>
                    <input type={"text"} value={value} onChange={handleChange} name={"editValue"}
                           onKeyPress={handleKeyDown}/>
                </>
                :
                <>
                    <span onDoubleClick={() => setUpdate(true)} key={id}>{key} : {value} </span>
                    <button onClick={handleDelete}>delete</button>
                </>
            }
        </>
    )
}

export default ItemTranslation;