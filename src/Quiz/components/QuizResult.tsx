import {ChangeEvent, FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CreateQuizUseCase from "../services/CreateQuizUseCase";
import {getTranslations} from "../../Translation/actions/translations";
import QuizStarterForm from "./QuizStarterForm";
import QuizQuestions from "./QuizQuestions";

interface QuizResult {
    score: number,
    restart: () => void
}

const QuizResult: FC<QuizResult> = ({score, restart}) => {

    return (
        <>
            <span>Votre score est de {score}</span>
            <button onClick={restart}>Rejouer</button>
        </>
    )

}

export default QuizResult;