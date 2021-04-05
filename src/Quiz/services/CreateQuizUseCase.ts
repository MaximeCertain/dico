class CreateQuizUseCase {
    private translations: [];

    constructor(translations: []) {
        this.translations = translations;
    }

    execute(nbQuestions: number = 15): never[] {
        return (this.getRandomElements(nbQuestions));
    }

    private getRandomElements(nbQuestions: number) {
        const shuffled = this.translations.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, nbQuestions);
        return selected
    }
}

export default CreateQuizUseCase;