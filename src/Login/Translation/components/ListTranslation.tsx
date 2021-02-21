import {ChangeEvent, FC, useEffect, useState} from "react";
import {db} from "../../../firebase/firebase.config";

interface IDoc {
    key: string,
    value: string
}

const ListTranslation: FC = () => {

    const [state, setState] = useState(Array)

    useEffect(() => {
        async function getTranslations() {
            let x = await db.collection('translations').get();
            setState(x.docs.map(doc => doc.data()))
        }
        getTranslations();
    }, []);


    return (
        <div>
            {state.map(({key, value}: any) => {
                return (<p>{key} : {value} </p>)
            })}
        </div>
    )
}

export default ListTranslation;