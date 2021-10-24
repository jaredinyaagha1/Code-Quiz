var qQuestions = [
{
        "question": "Commonly used data types DO NOT include: ",
        "answers": {
                "1. strings": false,
                "2. booleans": false,
                "3. alerts": true,
                "4. numbers": false
    }
},
{
    "question": "The condition in an if / else statment is enclosed within _______. ",
    "answers": {
        "1. quotes": false,
        "2. curly brackets": false,
        "3. parenthesis": true,
        "4. square brackets": false
    }
},
{
    "question": "Arrays in Javascript can be used to store ________.",
    "answers": {
        "1. numbers and strings": false,
        "2. booleans": false,
        "3. other arrays": false,
        "4. all of the above": true
    }
},
{
    "question": "String values must be enclosed within _____ when being assigned to variables.",
    "answers": {
        "1. commas": false,
        "2. curly brackets": false,
        "3. quotes": true,
        "4. parenthesis": false
    }
},
{
    "question": "A very useful tool used during development and debugging for printing to the debugger is: ",
    "answers": {
        "1. JavaScript": false,
        "2. terminal / bash": false,
        "3. for loops": false,
        "4. console.log": true
    }
}
];

var timer;
var timerVal;
var qCount = 0;
var score;
var resultTimer;

var timerEl = document.querySelector(".timer-count");
var timerContent = document.querySelector(".timer");
var startButtonEl = document.querySelector(".start-button");
var buttonsList = document.querySelector(".buttons");
var questList = document.querySelector(".questions");
var startScreen = document.querySelector(".firstScreen");
var questScreen = document.querySelector(".questionScreen");
var doneScreen = document.querySelector(".doneScreen");
var blurbScreen = document.querySelector(".correctWrong");
var correctBlurb = document.querySelector(".Correct");
var wrongBlurb = document.querySelector(".Wrong");

startButtonEl.addEventListener("click", function (event) {
    console.log("game start, game start!");
    event.stopPropagation();
    event.preventDefault();
    timerVal = 60;
    score = 0;
    count = 0;
    timerEl.textContent = timerVal;
    startScreen.classList.remove("firstScreen");
    startScreen.classList.add("hidden");
    questScreen.classList.remove("hidden");

    qQuestions = shuffleOrder(qQuestions);
    nextquestion();
    timer = setInterval(function () {
        timerVal--;
        timerEl.textContent = timerVal;
        if (timerVal <= 0) {
            clearInterval(timer);
            showQuizEnd(true);
        }
    }, 1000)
    
})

buttonsList.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
    var userChoice = event.target;
    if (userChoice.matches(".answer-button")) {
        AnswerChecker(userChoice.textContent);
    }
});

function shuffleOrder (order) {
    var count = order.length;
    while (count > 0) {
        var index = Math.floor(count * Math.random());
        count--;
        var temp = order[count];
        // console.log(order[count], "line 92")
        order[count] = order[index];
        // console.log(order[count], order[index], "line 94")
        order[index] = temp;
        // console.log(order[count], order[index],  temp,  "line 96")
    }
    return order
}

function nextquestion () {
    var currentQuest = qQuestions[qCount];
    questList.innerHTML = currentQuest.question;
    listAnswers(currentQuest.answers)
}

function listAnswers (answers) {
    answers = shuffleOrder(answers);
    var answerlist = document.createElement("ol");
    Object.keys(answers).forEach((key, index) => {
        var answId = 'answer' + index,
        answerEl = document.createElement("li");
        answerEl.id = answId;
        answerEl.className = "answer-class";
        var answerBtn = document.createElement("button");
        answerBtn.className = "answer-button";
        answerBtn.textContent = key;
       answerEl.appendChild(answerBtn);
       answerlist.appendChild(answerEl);
   });
   buttonsList.innerHTML = answerlist.innerHTML;
}

function AnswerChecker (playerAnswer) {
    var possibleAnswers = qQuestions[qCount].answers;
    var correctAns = possibleAnswers[playerAnswer];
    if (correctAns) {
        blurbScreen.classList.remove("hidden");
        wrongBlurb.classList.add("hidden");
        correctBlurb.classList.remove("hidden");
        console.log(correctAns)
        score += 10;
    }
    else {
        blurbScreen.classList.remove("hidden");
        correctBlurb.classList.add("hidden");
        wrongBlurb.classList.remove("hidden");
        console.log("149, wrong")
        timerVal -= 10;
    }
    clearInterval(resultTimer);
    var secPassed = 0;
    resultTimer = setInterval(function () {
        if (secPassed === 1) {
            blurbScreen.classList.add("hidden");            
            clearInterval(resultTimer);
        }
        secPassed++;
    }, 1000)
    qCount++;
    if (qCount === qQuestions.length) {
        showQuizEnd(true);
    } else {
        nextquestion ();
    }
}

function showQuizEnd () {
    questScreen.classList.add("hidden");
    timerContent.classList.add('hidden');
    doneScreen.classList.remove('hidden');
}