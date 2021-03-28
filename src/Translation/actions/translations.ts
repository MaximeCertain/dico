import {ADD_TRANSLATION, DELETE_TRANSLATION, EDITED_TRANSLATION, GET_TRANSLATIONS} from "./type";
import TranslationService from "../services/TranslationService";
import Translation from "../../domain/translation/Translation";
import translations from "../reducers/translations";

export const getTranslations = () => (dispatch: any) => {
    return TranslationService.getTranslations().then((response) => {

        dispatch({
            type: GET_TRANSLATIONS,
            payload: response
        })
    })
}

export const deleteTranslation = (uid: string) => (dispatch: any) => {
    return TranslationService.deleteTranslation(uid).then(() => {
        dispatch({
            type: DELETE_TRANSLATION,
            uid: uid
        })
    })
}

export const addNewTranslation = (translation: Translation) => (dispatch: any) => {
    console.log(translation)
    console.log(JSON.parse(JSON.stringify(translation)))
    return TranslationService.addTranslation(translation).then((newTranslation) => {
        console.log(newTranslation)
        dispatch({
            type: ADD_TRANSLATION,
            translation: newTranslation
        })
    }).catch((error) => {
        console.log(error)
    })
}

export const editNewTranslation = (translation: Translation, uid: string) => (dispatch: any) => {
    return TranslationService.editTranslation(translation, uid).then((editedTranslation) => {

        dispatch({
            type: EDITED_TRANSLATION,
            translation: {uid: uid, key: translation.key, value: translation.value}
        })

    })
}