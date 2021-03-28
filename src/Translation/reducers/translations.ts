import {ADD_TRANSLATION, DELETE_TRANSLATION, EDITED_TRANSLATION, GET_TRANSLATIONS} from "../actions/type"

const initialState = {translations: []};

export default function (state = initialState, action: any) {
    const {type, payload} = action;
    switch (type) {
        case GET_TRANSLATIONS:
            return {
                ...state,
                translations: payload
            }
        case DELETE_TRANSLATION:
            return {
                ...state,
                translations: state.translations.filter((item: any) => action.uid !== item.id)
            }
        case ADD_TRANSLATION:
            return {
                ...state,
                translations: [...state.translations, action.translation]
            }
        case EDITED_TRANSLATION:
            console.log(action)
            return {
                ...state,
                translations: [...state.translations.filter((item: any) => action.translation.uid !== item.id), action.translation]
            }
        default:
            return state
    }
}