class PromptPointer {

    constructor(id, textFunction, showNextText) {
        this.id = id;
        this.textFunction = textFunction;
        this.showNextText = showNextText;
    }

    getId() {
        return this.id;
    }

    getPromptFromPointer() {
        var prompt = PromptTree.getPrompt(this.getId());
        if (prompt != null) {
            return prompt;
        } else {
            return null;
        }
    }

    getShowNextText() {
        return this.showNextText;
    }

    async runTextFunction() {
        if (this.textFunction != null) {
            disableInput();
            await this.textFunction();
            if (!this.getShowNextText()) {
                await appendOutput("\n\n");
            }
            enableInput();
        }
    }

}