class Prompt {

    constructor(id, textFunction, promptFunction, ...args) {
        var validConstructor = true;
        if (args.length % 2 == 0) {
            for (let i = 0; i < args.length; i++) {
                if (i % 2 == 0) {
                    if (typeof args[i] != "string") {
                        validConstructor = false;
                        break;
                    }
                } else {
                    if (!(args[i] instanceof Prompt || args[i] instanceof PromptPointer)) {
                        validConstructor = false;
                        break;
                    }
                }
            }
        } else {
            validConstructor = false;
        }
        if (validConstructor) {
            this.id = id;
            this.textFunction = textFunction;
            this.promptFunction = promptFunction;
            this.answerMap = new Map();
            for (let i = 0; i < args.length; i += 2) {
                this.answerMap.set(args[i], args[i + 1]);
            }
            PromptTree.promptList.push(this);
        } else {
            throw new TypeError("Constructor arguments invalid for prompt " + prompt);
        }
    }

    async runFunctions(showText) {
        disableInput();
        if (showText && this.textFunction != null) {
            await this.textFunction();
            await appendOutput("\n\n")
        }
        await this.promptFunction();
        enableInput();
    }

    getId() {
        return this.id;
    }

    getChildPrompt(answer) {
        if (this.answerMap.has(answer)) {
            return this.answerMap.get(answer);
        } else {
            return null;
        }
    }

}