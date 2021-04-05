import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CreateQuizUseCase from "../services/CreateQuizUseCase";
import {editNewTranslation, getTranslations} from "../../Translation/actions/translations";
import QuizStarterForm from "./QuizStarterForm";
import QuizQuestionItem from "./QuizQuestionItem";
import Translation from "../../domain/translation/Translation";
import QuizResult from "./QuizResult";

interface QuizQuestionsProps {
    questions: never[],
    restartQuiz: () => void

}

const QuizQuestions: FC<QuizQuestionsProps> = ({questions, restartQuiz}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [isEndedQuiz, setEndedQuiz] = useState(false)

    const submitQuestion = (resultQuestion: boolean) => {
        console.log(resultQuestion)
        resultQuestion && setScore(score + 1);
        if (questions.length - 1 > currentQuestion) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            endQuiz(score)
        }
    }

    const endQuiz = (score: number) => {
        setEndedQuiz(true)
    }


    return (
        <>

            {isEndedQuiz
                ?
                <QuizResult score={score} restart={restartQuiz}/>
                :
                <QuizQuestionItem question={questions[currentQuestion]} submitQuestion={submitQuestion}/>
            }


        </>
    )
}

export default QuizQuestions;