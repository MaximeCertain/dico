import {ChangeEvent, FC, useState} from "react";
import {useDispatch} from "react-redux";

interface QuizQuestionItemProps {
    question: any,
    submitQuestion: (result: boolean) => void
}

const QuizQuestionItemProps: FC<QuizQuestionItemProps> = ({question, submitQuestion}) => {

    const [submittedValue, setSubmittedValue] = useState("");

    const handleKeyDown = (e: any) => {
        if (submittedValue != "" && e.code === 'Enter') {
            submitQuestion(isCorrectAnswer())
            setSubmittedValue("")
        }
    }

    const isCorrectAnswer = () => {
        if (submittedValue.toLowerCase() == question.key.toLowerCase()) {
            return true
        }
        return false;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSubmittedValue(e.target.value)
    }
    return (
        <>
            <label>{question.value}</label>
            <input name={"answer"} onChange={handleChange} onKeyPress={handleKeyDown} value={submittedValue}/>
        </>
    )

}

export default QuizQuestionItemProps;