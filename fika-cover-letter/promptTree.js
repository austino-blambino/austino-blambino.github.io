class PromptTree {

    static root;
    static currentPrompt;
    static promptList = [];
    static previousInputValid = true;
    static awaitingEnter = false;

    static setTree(rootIn) {
        this.root = rootIn
        this.currentPrompt = rootIn;
    }

    static getPrompt(id) {
        for (let i = 0; i < this.promptList.length; i++) {
            if (this.promptList[i].getId() == id) {
                return this.promptList[i];
            }
        }
        return null;
    }

    static setCurrentPrompt(prompt) {
        this.currentPrompt = prompt;
    }

    static getCurrentPrompt() {
        return this.currentPrompt;
    }

    static setAwaitingEnter(val) {
        this.awaitingEnter = val;
    }

    static getAwaitingEnter() {
        return this.awaitingEnter;
    }


    static async recieveInput(input) {
        if (this.awaitingEnter) {
            exitAwaitingEnterLoop();
        } else if (input != "") {
            var childPrompt = this.getCurrentPrompt().getChildPrompt(input);
            var promptPointer = null;
            var showText = true;
            if (childPrompt instanceof PromptPointer) {
                promptPointer = childPrompt;
                childPrompt = promptPointer.getPromptFromPointer();
                if (childPrompt == null) {
                    throw new TypeError("Could not find prompt with ID " + promptPointer.getId());
                }
                showText = promptPointer.getShowNextText();
            }
            if (childPrompt != null) {
                if (!this.previousInputValid) {
                    erasePreviousInvalidInput();
                    await validInput(input, false);
                } else {
                    await validInput(input, true);
                }
                this.previousInputValid = true;
                if (promptPointer != null) {
                    await promptPointer.runTextFunction();
                }
                childPrompt.runFunctions(showText);
                this.setCurrentPrompt(childPrompt);
            } else {
                if (!this.previousInputValid) {
                    erasePreviousInvalidInput();
                    await invalidInput(false);
                } else {
                    await invalidInput(true);
                }
                this.previousInputValid = false;
            }
        }
    }
}