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
    
    getChildPrompt(input) {
        if (this.answerMap.has(input)) {
            return this.answerMap.get(input);
        } else {
            return null;
        }
    }

    guessInput(input) {
        var dlDist;
        for (const key of this.answerMap.keys()) {
            dlDist = this.getDLDist(input, key);
            if (dlDist <= 2) {
                return key; // All valid inputs are more than 4 edits apart
            }
        }
        return null;
    }

    getDLDist(a, b) {
        const lenA = a.length;
        const lenB = b.length;
        
        const dp = Array.from({ length: lenA + 1 }, () => Array(lenB + 1).fill(0));
        
        for (let i = 0; i <= lenA; i++) dp[i][0] = i;
        for (let j = 0; j <= lenB; j++) dp[0][j] = j;
        
        for (let i = 1; i <= lenA; i++) {
            for (let j = 1; j <= lenB; j++) {
                const cost = a[i - 1] === b[j - 1] ? 0 : 1;
                
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // Deletion
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j - 1] + cost // Substitution
                );
                if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + cost); // Transposition
                }
            }
        }
        
        return dp[lenA][lenB];
    }

}