const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");
var displaying = true;
var storytime = false;
var storytimeEnterPressed = false;
var waitingToBegin = true;
var answeredNo = false;
var previousInputInvalid = false;

async function waitToBegin() {
    inputElement.value = "Press enter to begin...";
    while (waitingToBegin) {
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log("WAIT: Test failed")
    }
    inputElement.value = "";
    initialOutput();
}

async function initialOutput() {
     await appendOutput("     ___                                            .-.            ___                                      \n", 1);
     await appendOutput("    (   )                                          /    \\    .-.  (   )                                     \n", 1);
     await appendOutput("  .-.| |    .--.     .---.   ___ .-.               | .`. ;  ( __)  | |   ___     .---.                      \n", 1);
     await appendOutput(" /   \\ |   /    \\   / .-, \\ (   )   \\              | |(___) (''\")  | |  (   )   / .-, \\                     \n", 1);
     await appendOutput("|  .-. |  |  .-. ; (__) ; |  | ' .-. ;             | |_      | |   | |  ' /    (__) ; |                     \n", 1);
     await appendOutput("| |  | |  |  | | |   .'`  |  |  / (___)           (   __)    | |   | |,' /       .'`  |                     \n", 1);
     await appendOutput("| |  | |  |  |/  |  / .'| |  | |                   | |       | |   | .  '.      / .'| |                     \n", 1);
     await appendOutput("| |  | |  |  ' _.' | /  | |  | |                   | |       | |   | | `. \\    | /  | |                     \n", 1);
     await appendOutput("| '  | |  |  .'.-. ; |  ; |  | |                   | |       | |   | |   \\ \\   ; |  ; |                     \n", 1);
     await appendOutput("' `-'  /  '  `-' / ' `-'  |  | |                   | |       | |   | |    \\ .  ' `-'  |                     \n", 1);
     await appendOutput(" `.__,'    `.__.'  `.__.'_. (___)                 (___)     (___) (___ ) (___) `.__.'_.                     \n", 1);
     await appendOutput("                     .-.       .-.                        ___                                               \n", 1);
     await appendOutput("                    /    \\    /    \\                     (   )                                              \n", 1);
     await appendOutput("  .--.      .--.    | .`. ;   | .`. ;    .--.     .--.    | | .-.     .--.    ___  ___      .--.      .--.  \n", 1);
     await appendOutput(" /    \\    /    \\   | |(___)  | |(___)  /    \\   /    \\   | |/   \\   /    \\  (   )(   )   /  _  \\    /    \\ \n", 1);
     await appendOutput("|  .-. ;  |  .-. ;  | |_      | |_     |  .-. ; |  .-. ;  |  .-. .  |  .-. ;  | |  | |   . .' `. ;  |  .-. ;\n", 1);
     await appendOutput("|  |(___) | |  | | (   __)   (   __)   |  | | | |  | | |  | |  | |  | |  | |  | |  | |   | '   | |  |  | | |\n", 1);
     await appendOutput("|  |      | |  | |  | |       | |      |  |/  | |  |/  |  | |  | |  | |  | |  | |  | |   _\\_`.(___) |  |/  |\n", 1);
     await appendOutput("|  | ___  | |  | |  | |       | |      |  ' _.' |  ' _.'  | |  | |  | |  | |  | |  | |  (   ). '.   |  ' _.'\n", 1);
     await appendOutput("|  '(   ) | '  | |  | |       | |      |  .'.-. |  .'.-.  | |  | |  | '  | |  | |  ; '   | |  `\\ |  |  .'.-.\n", 1);
     await appendOutput("'  `-' |  '  `-' /  | |       | |      '  `-' / '  `-' /  | |  | |  '  `-' /  ' `-'  /   ; '._,' '  '  `-' /\n", 1);
     await appendOutput(" `.__,'    `.__.'  (___)     (___)      `.__.'   `.__.'  (___)(___)  `.__.'    '.__.'     '.___.'    `.__.' \n", 1);
     await appendOutput("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n", 7);
    await wait(250);
    await appendOutput("\nThank you for checking out my cover letter! My name is Austin Barton. A great adventure awaits us! We haven't a moment to waste...so what do you say we start with some backstory?\n\n(Enter 'yes' or 'no')", 10);
    setInputDisabled(false);
}

async function checkInput(inputText) {
    if (waitingToBegin) {
        waitingToBegin = false;
    }
    else if (storytime) {
        storytimeEnterPressed = true;
        console.log("storytimeEnterPressed")
    }
    else if (!displaying) {
        if (inputText.toLowerCase().trim() === "no" || inputText.toLowerCase().trim() === "n" ) {
            inputElement.value = "";
            if (answeredNo) {
                await acceptInput(inputText, false);
                if (!previousInputInvalid) {
                    truncateOutput(36);
                }
                else {
                    truncateOutput(37);
                }
            } else {
                await acceptInput(inputText);
            }
            appendOutput("That's silly. Why are you here then?", 10);
            setInputDisabled(false);
            answeredNo = true;
        }
        else if (inputText.toLowerCase().trim() === "yes" || inputText.toLowerCase().trim() === "y" ) {
            if (answeredNo) {
                if (!previousInputInvalid) {
                    truncateOutput(51);
                }
                else {
                    truncateOutput(50);
                }
            }
            await acceptInput(inputText);
            output1();
            answeredNo = false;
        }
        else if (inputText != "") {
            if (previousInputInvalid) {
                truncateOutput(38);
                appendOutput("I'm afraid I don't know what you mean.", 10)
            } else {
                appendOutput("\n\nI'm afraid I don't know what you mean.", 10);
            }
            previousInputInvalid = true
            inputElement.value = "";
        }
    }
}

function setInputDisabled(value) {
    if (value == false) {
        displaying = false;
        inputElement.disabled = false;
        inputElement.focus();
    }
    else {
        displaying = true;
        inputElement.disabled = true;
    }
}

async function acceptInput(inputText, updateOutput=true) {
    if (previousInputInvalid) {
        truncateOutput(40);
    }
    previousInputInvalid = false;
    outputElement.scrollTop = outputElement.scrollHeight;
    setInputDisabled(true);
    inputElement.value = "";
    if (updateOutput) {
        outputElement.innerHTML = outputElement.innerHTML + "\n\n>> " + inputText;
        await wait(175);
        outputElement.innerHTML = outputElement.innerHTML + "\n\n";
        await wait(75);
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function appendOutput(text, ms) {
    for (let i = 0; i < text.length; i++) {
        outputElement.innerHTML = outputElement.innerHTML + text.charAt(i);
        await wait(ms);
    }
}

async function output1() {
    storytime = true;
    await appendOutput("(In order to keep with the storybeats, the program will halt until you press enter.)", 10);
    await storytimeWait();
    truncateOutput(84);
    await appendOutput("It all begins 19 years ago, on April 1st, 2005. That was the day I was born. ", 10)
    await storytimeWait();
    await appendOutput("Okay, maybe that's a bit far back.", 10);
    await wait(100);
    await appendOutput("\n\nLet's skip ahead to the summer of 2019, just before my freshman year of high school...", 10);
    await storytimeWait();
    setInputDisabled(false);
    storytime = false;
}

async function storytimeWait() {
    inputElement.value = "Press enter to continue...";
    while (!storytimeEnterPressed) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
    }
    inputElement.value = "";
    storytimeEnterPressed = false;
}

function truncateOutput(len) {
    console.log("Removed " + outputElement.innerHTML.substring(outputElement.innerHTML.length - len));
    outputElement.innerHTML = outputElement.innerHTML.substring(0, outputElement.innerHTML.length - len);
} 

waitToBegin();