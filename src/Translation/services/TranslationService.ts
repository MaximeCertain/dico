import {db} from "../../firebase/firebase.config";
import Translation from "../../domain/translation/Translation";

const TRANSLATIONS_COLLECTION = "translations"

class TranslationService {

    static async getTranslations() {
        let translations = await db.collection(TRANSLATIONS_COLLECTION).get();
        const docs = translations.docs.map((doc) => {
            return {id: doc.id, ...doc.data()}
        })
        return docs
    }

    static async deleteTranslation(uid: string) {
        let x = await db.collection(TRANSLATIONS_COLLECTION).doc(uid).delete();
    }

    static async addTranslation(translation: Translation) {
        const addTRanslation = {key: translation.key, value: translation.value};

        let transaltionCol = await db.collection(TRANSLATIONS_COLLECTION);
        let newDoc = await transaltionCol.add({key: translation.key, value: translation.value})

        return {id: newDoc.id, ...addTRanslation}
    }

    static async editTranslation(translation: any, uid: string) {
        let translationCol = await db.collection(TRANSLATIONS_COLLECTION);
        let editedDoc = await translationCol.doc(uid).update({key: translation.key, value: translation.value})
    }

}

export default TranslationService;