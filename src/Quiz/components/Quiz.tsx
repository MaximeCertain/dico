import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CreateQuizUseCase from "../services/CreateQuizUseCase";
import {getTranslations} from "../../Translation/actions/translations";
import QuizStarterForm from "./QuizStarterForm";
import QuizQuestions from "./QuizQuestions";

const Quiz: FC = () => {

    const [questions, setQuestions] = useState([]);
    const translations = useSelector((state: any) => state.translate.translations)
    const [isStartedQuiz, setStartedQuiz] = useState(false)

    const loadQuiz = (number: number) => {
        setQuestions(new CreateQuizUseCase(translations).execute(number));
        setStartedQuiz(true)
    }

    const restartQuiz = () => {
        setStartedQuiz(false)
    }

    return (
        <>
            {isStartedQuiz ?

                <QuizQuestions questions={questions} restartQuiz={restartQuiz}/>

                :
                <QuizStarterForm onClick={loadQuiz}/>
            }
        </>
    )
}

export default Quiz;