import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CreateQuizUseCase from "../services/CreateQuizUseCase";
import {getTranslations} from "../../Translation/actions/translations";

interface QuizStarterFormProps {
    onClick: (number: number) => void
}

const QuizStarterForm: FC<QuizStarterFormProps> = ({onClick}) => {
    const [nbQuestions, setNbQuestions] = useState(10);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNbQuestions(Number(event.target.value));
    }

    return (
        <>
            <input name={"questionNumber"} placeholder={"nombre de questions souhaités"} onChange={handleChange} value={nbQuestions}/>
            <button onClick={() => onClick(nbQuestions)}>Commencer le Quiz</button>
        </>
    )

}

export default QuizStarterForm;