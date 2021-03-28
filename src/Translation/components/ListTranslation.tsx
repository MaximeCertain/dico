import {ChangeEvent, FC, useEffect, useState} from "react";
import {getTranslations, deleteTranslation} from "../actions/translations"
import {useDispatch, useSelector} from "react-redux";
import ItemTranslation from "./ItemTranslation";
import "./Input.scss"

const ListTranslation: FC = () => {
    const dispatch = useDispatch();
    const translations = useSelector((state: any) => state.translate.translations)
    const [printedTranslations, setPrintedTranslations] = useState(translations);

    useEffect(() => {
        dispatch(getTranslations())
    }, []);

    const handleDelete = (id: string) => {
        dispatch(deleteTranslation(id))
    }
    const filter = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredValue = e.target.value;
        if (filteredValue == null) {
            setPrintedTranslations(translations)
        } else {
            const filteresults = translations.filter((item: any) => (item.key.includes(filteredValue) || item.value.includes(filteredValue)))
            setPrintedTranslations(filteresults)
        }
    }
    return (
        <>
            <div className={"input-container"}>
                <input type={"text"} onChange={filter} name={"filter"}/>
                <label htmlFor="filter">Your Name</label>
            </div>
            { translations.map(({key, value, id}: any) => {
                return (
                    <div key={id}>
                        <ItemTranslation handleDelete={() => handleDelete(id)} keyTranslated={key}
                                         valueTranslated={value}
                                         id={id}/>
                    </div>
                )
            })}

        </>
    )
}

export default ListTranslation;