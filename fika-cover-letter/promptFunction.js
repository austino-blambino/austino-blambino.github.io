const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function appendOutput(text) {
    for (let i = 0; i < text.length; i++) {
        outputElement.innerHTML = outputElement.innerHTML + text.charAt(i);
        await wait(1);
    }
}

async function instantAppendOutput(text, ms) {
    outputElement.innerHTML = outputElement.innerHTML + text;
    await wait(ms); 
}

function truncateOutput(len) {
    outputElement.innerHTML = outputElement.innerHTML.substring(0, outputElement.innerHTML.length - len);
}

function clearOutput() {
    outputElement.innerHTML = "";
}

function setInput(text) {
    inputElement.value = text;
}

function clearInput() {
    inputElement.value = "";
}

function disableInput() {
    inputElement.disabled = true;
}

function enableInput() {
    inputElement.disabled = false;
    inputElement.focus();
}


async function validInput(input, isPreviousValid) {
    clearInput();
    if (isPreviousValid) {
        instantAppendOutput("\n\n>> " + input);
        await wait(175);
        instantAppendOutput("\n\n");
        await wait(75);
    } else {
        instantAppendOutput(">> " + input);
        await wait(175);
        instantAppendOutput("\n\n");
        await wait(75);
    }
}

async function invalidInput(isPreviousValid) {
    if (isPreviousValid) {
        appendOutput("\n\nI'm afraid I don't know what you mean.");
    } else {
        appendOutput("I'm afraid I don't know what you mean.");
    }
}

function erasePreviousInvalidInput() {
    truncateOutput(38);
}


async function awaitingEnterLoop() {
    PromptTree.setAwaitingEnter(true);
    setInput("Press enter to continue...");
    while (PromptTree.getAwaitingEnter()) {
        await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100ms
    }
    clearInput();
}

function exitAwaitingEnterLoop() {
    PromptTree.setAwaitingEnter(false);
}



async function thanksText() {
    await appendOutput("Thank you for checking out my cover letter!");
}

async function thanksPrompt() {
    await appendOutput("What do you say we get started? (Enter 'yes' or 'no')");
}

async function rootNoText() {
    await appendOutput("That's silly. Why else are you here?");
}

async function introText() {
    clearOutput();
    await appendOutput("(In order to keep with the storybeats, the program will halt until you press enter.)");
    await awaitingEnterLoop();
    truncateOutput(84);
    await appendOutput("     ___                                            .-.            ___                                      \n");
    await appendOutput("    (   )                                          /    \\    .-.  (   )                                     \n");
    await appendOutput("  .-.| |    .--.     .---.   ___ .-.               | .`. ;  ( __)  | |   ___     .---.                      \n");
    await appendOutput(" /   \\ |   /    \\   / .-, \\ (   )   \\              | |(___) (''\")  | |  (   )   / .-, \\                     \n");
    await appendOutput("|  .-. |  |  .-. ; (__) ; |  | ' .-. ;             | |_      | |   | |  ' /    (__) ; |                     \n");
    await appendOutput("| |  | |  |  | | |   .'`  |  |  / (___)           (   __)    | |   | |,' /       .'`  |                     \n");
    await appendOutput("| |  | |  |  |/  |  / .'| |  | |                   | |       | |   | .  '.      / .'| |                     \n");
    await appendOutput("| |  | |  |  ' _.' | /  | |  | |                   | |       | |   | | `. \\    | /  | |                     \n");
    await appendOutput("| '  | |  |  .'.-. ; |  ; |  | |                   | |       | |   | |   \\ \\   ; |  ; |                     \n");
    await appendOutput("' `-'  /  '  `-' / ' `-'  |  | |                   | |       | |   | |    \\ .  ' `-'  |                     \n");
    await appendOutput(" `.__,'    `.__.'  `.__.'_. (___)                 (___)     (___) (___ ) (___) `.__.'_.                     \n");
    await appendOutput("                     .-.       .-.                        ___                                               \n");
    await appendOutput("                    /    \\    /    \\                     (   )                                              \n");
    await appendOutput("  .--.      .--.    | .`. ;   | .`. ;    .--.     .--.    | | .-.     .--.    ___  ___      .--.      .--.  \n");
    await appendOutput(" /    \\    /    \\   | |(___)  | |(___)  /    \\   /    \\   | |/   \\   /    \\  (   )(   )   /  _  \\    /    \\ \n");
    await appendOutput("|  .-. ;  |  .-. ;  | |_      | |_     |  .-. ; |  .-. ;  |  .-. .  |  .-. ;  | |  | |   . .' `. ;  |  .-. ;\n");
    await appendOutput("|  |(___) | |  | | (   __)   (   __)   |  | | | |  | | |  | |  | |  | |  | |  | |  | |   | '   | |  |  | | |\n");
    await appendOutput("|  |      | |  | |  | |       | |      |  |/  | |  |/  |  | |  | |  | |  | |  | |  | |   _\\_`.(___) |  |/  |\n");
    await appendOutput("|  | ___  | |  | |  | |       | |      |  ' _.' |  ' _.'  | |  | |  | |  | |  | |  | |  (   ). '.   |  ' _.'\n");
    await appendOutput("|  '(   ) | '  | |  | |       | |      |  .'.-. |  .'.-.  | |  | |  | '  | |  | |  ; '   | |  `\\ |  |  .'.-.\n");
    await appendOutput("'  `-' |  '  `-' /  | |       | |      '  `-' / '  `-' /  | |  | |  '  `-' /  ' `-'  /   ; '._,' '  '  `-' /\n");
    await appendOutput(" `.__,'    `.__.'  (___)     (___)      `.__.'   `.__.'  (___)(___)  `.__.'    '.__.'     '.___.'    `.__.' \n");
    await appendOutput("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    await awaitingEnterLoop();
    await appendOutput("\n\nMy name is Austin Barton! Among other things, I'm a computer hobbyist who loves coding (obviously). I look to aid Fika Coffeehouse as a general barista by using my personable extroversion and warm customer service. My employment history provides me various skills that make me viable as a barista.\n\nNow, I'd imagine that this is not your typical cover letter. But variety is the spice of life, so let's go right on ahead! You'll be answering a bunch of questions regarding what you'd like to hear about me. Just navigate through the questions as you please, and enjoy this interactive cover letter!\n\n---");
    await awaitingEnterLoop();
}

async function introPrompt() {
    await appendOutput("What about me would you like to hear more about? (Enter 'jobs', 'why fika', 'college', 'church', or 'hobbies')");
}

async function jobsText() {
    await appendOutput("Come the summer before senior year of high school, the end of my free trial of living (childhood) was drawing nearer and getting a job was in order. The job hunt had a pretty sizable restriction: I had no car, so my job had to be within biking distance. My eyes were originally set on a coffeeshop, and Fika was appealing...until I considered what that bike ride up Hess and Hilltop would be like in the bitter frosts of winter. Much less appealing.");
    await awaitingEnterLoop();
    await appendOutput("\n\nSo I settled for another job, one I didn't particularly enjoy that much, but one that paid me. I landed at King Soopers for a few months, until their less-than-desirable scheduling practices got in the way of school. Then, the following summer, I got two jobs: at Hokulia Shave Ice and at Creative Installation Solutions. They served me well enough, but as August rolled around, I was about to leave for college and couldn't work those jobs anymore. I knew getting a job during my first semester was not a wise idea.\n\nThen college happened, but college is a whole story by itself.");
    await awaitingEnterLoop();
    await appendOutput("\n\nComing home from in-person college, I found myself with a lot of free time, and I sought a job once more. Every job I had in the past had major flaws that left me disinclined to return, so I revived the job hunt once again.\n\nI found my way to Crumbl Parker, which did not have a very good work environment nor a very good manager. The final straw was when I had four shifts in a row cancelled. I decided that I wanted a job that would actually schedule me and not back out half the time.");
    await awaitingEnterLoop();
    await appendOutput("\n\nA friend about Crumbl Castle Rock and told me that the work environment, manager, and hours there were significantly better than Parker. Within a month, I transferred locations, and my friend wasn't lying. At the time, I sought a part-time job, and Crumbl could offer me one. Now that I am fully out of college, I'm making progress towards moving out one day, and that calls for a higher income than a part-time job can provide. Crumbl unfortunately cannot provide me a full-time position, so here we are, job hunting yet again.\n\nAnd of course, I'm job hunting for another customer service job! I've refined my already-effective customer service muscle over the years, so what else to do than to use it?\n\n---");
    await awaitingEnterLoop();
}

async function whyText() {
    await appendOutput("Sometime in middle school, I had heard about this fantastic coffeeshop called \"Feeka\" or something. Apparently it had a super homey feel that no other place had. My dad almost always met up with his buddy Rob Dombrower at this \"Ficah\". I had never seen and experienced the cozy and welcoming vibes yet, and I had a sneaking suspicion everyone was really just overhyping this place because they knew the owner.\n\nWhen I got high school, I decided to go in with some friends after marching band. I had to see if this place was actually as great as people claimed.");
    await awaitingEnterLoop();
    await appendOutput("\n\nOverhyped was about as far from reality as you could get. Everyone was right on the money about Fika's atmosphere. I was very not on the money with how I thought Fika was spelled. Fika quickly became a regular meetup spot after marching band, and a cool Italian Soda was a wonderful relief after a brutal day out on the pavement. A peppermint hot chocolate (heavy-handed on the peppermint) did the trick too, though neither were reserved for marching band. To this day I continue to meet up with one Braden McCann (almost) every monday at Mainstreet Fika.");
    await awaitingEnterLoop();
    await appendOutput("\n\nWhen thinking about where to get a job, Fika was an immediate candidate. In fact, I've had several people recommend I work at a coffee shop. It's no surprise, honestly: I am a huge people person. I love talking to people, I love serving people, and I'm good at small talk. That is an ideal combo for coffeeshop customer service. Additionally, my previous jobs taught me a lot of other essentials for the food business, like handling food and the logistics of running a store. My experience and my personality sets me up for success at a coffee shop, especially one with Fika's homey environment.\n\n---");
    await awaitingEnterLoop();
}

async function collegeText() {
    await appendOutput("Following high school, I immediately went to Colorado State University in Fort Collins to study computer science. Unfortunately for me, I was completely unprepared for what college would take. I can vividly remember sitting on my bedroom floor, shaking and sobbing, because I was so terrified of college. My life was already teetering on the edge of collapse as it was, and I was living under my parent's roof, on summer break, working part-time hours. I just couldn't envision myself being successful in college.\n\nAnd as it turned out, my fears had a fair amount of merit to them.");
    await awaitingEnterLoop();
    await appendOutput("\n\nMy first and only in-person semester of college was easily the worst six months of my life to date. College, however, was a lot more than just difficult for me. Fiasco would be putting it kindly. I never thought I was one to struggle mentally, but at CSU I saw my mental health go to depths I have never seen before. To be totally honest, I probably should've been on antidepressants. I still avoid Fort Collins because it puts me back in that depressive mindset when I go there.\n\nBy the end of the first semester, my grades and mental health were so poor that remaining as a full-time in-person student was downright foolish. I came back to Parker in hopes of regaining some mental stability and getting better at schooling in general. I decided to do an extremely light online workload and start going to therapy.");
    await awaitingEnterLoop();
    await appendOutput("\n\nHowever, going online didn't teach me how to school. What it did teach me is that I don't actually want to go to school. I realzed that I was only doing school because the people I cared about in my life wanted me to do school. I was pursuing other people's dreams, not my own. When their voices stopped cutting through and it was purely up to me to motivate myself, I found that nothing in me had any of that motivation. Apart from that, I lacked the discipline to push through anyways. That left me unhappy in school, yet angry at myself for not being good at it. I was ashamed that I wanted to drop out, but also ashamed that I wasn't having success. So eventually, something had to give.");
    await awaitingEnterLoop();
    await appendOutput("\n\nI finally gave up on being afraid of dropping out and looked at my dilemna logically: if I didn't have any moitivation to go to school and I didn't have the discipline to push through, my likelihood of success was zero percent. So there was only one right option: to drop out. Why waste time and money on something I know for a fact I won't succeed in? At the end of the day, dropping out wasn't the end of the world, it was just the closing of a door. One that had a lot of opportunity behind it, sure, but college really was just a door.\n\nAnd for that matter, that door isn't even closed forever; I can always come back to college.\n\n---");
    await awaitingEnterLoop();
}

async function churchText() {
    await appendOutput("I am honored to say that I am Christian who truly loves the Lord. My faith is hands-down the most integral part of my life. If you were to have a deep, intellectual conversation with me, I would undoubtedly bring up spirituality. My faith impacts every aspect of my life in some way.");
    await awaitingEnterLoop();
    await appendOutput("\n\nIf you were to attend the Parker location at Journey Church Colorado, you would see me in the front left row almost every single Sunday. If I'm not there, I'm almost certainly at the main location in Castle Pines. I regularly help set up and tear down the Parker location every week (instead of going to the gym), as well as being a leader for the high school ministry, Vibe. Every Sunday evening at 4:45 until usually around 9:30, I'm hanging out with the freshman boys. They're great. Love 'em to death.\n\nYou could also catch me chowing down some bible teaching and Chick-fil-A at the Journey Young Adults meeting. Every other Tuesday, all of us young adults get together at The Collective to eat dinner, praise the Lord, hear a sermon, and discuss the Word. To see me on the off Tuesdays, you'd have to come to the Hart's house for the 18-24 young adults small group.");
    await awaitingEnterLoop();
    await appendOutput("\n\nAnd if all of that involvment wasn't enough, I'm also looking to get an internship at Journey! A few months ago, I was working through a calling to ministry. Fundimentally, I'm called to ministry wherever I am, but the real question is if God is calling me to full-time ministry as a career. I really don't know if that's what He's called me to or not, so what better way to know than to just try?\n\n---");
    await awaitingEnterLoop();
}

async function hobbiesText() {
    await appendOutput("I'm a rather eclectic hobbyist, delving lightly into various things.\n\n(To go back to the parent question, type 'back')");
    await awaitingEnterLoop();
    truncateOutput(50);
}

async function hobbiesPrompt() {
    await appendOutput("What hobbies would you like to hear more about? (Enter 'coding', 'baking', 'knife throwing', 'photography', 'disc golf', 'drawing', 'music', or 'back')");
}

async function codingText() {
    await appendOutput("codingText");
}

async function bakingText() {
    await appendOutput("bakingText");
}

async function knifeText() {
    await appendOutput("knifeText");
}

async function photoText() {
    await appendOutput("photoText");
}

async function discText() {
    await appendOutput("discText");
}

async function drawingText() {
    await appendOutput("drawingText");
}

async function musicText() {
    await appendOutput("musicText");
}

