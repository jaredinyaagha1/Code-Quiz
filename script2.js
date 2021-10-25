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
var timerScore = document.querySelector(".timerscore");
var startButtonEl = document.querySelector(".start-button");
var buttonsList = document.querySelector(".buttons");
var questList = document.querySelector(".questions");
var startScreen = document.querySelector(".firstScreen");
var questScreen = document.querySelector(".questionScreen");
var doneScreen = document.querySelector(".doneScreen");
var blurbScreen = document.querySelector(".correctWrong");
var correctBlurb = document.querySelector(".Correct");
var wrongBlurb = document.querySelector(".Wrong");
var highScoreBtn = document.querySelector(".highscorePage");
var highScoScreen = document.querySelector(".highScoreScreen");
var scoreForm = document.querySelector("#submit-score");
var hsTitle = document.querySelector(".hsTitle");

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
        if (timerVal <= 0 || qCount === qQuestions.length) {            
            clearInterval(timer);
            clearTimeout(timer);
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

function showScores () {
    startScreen.classList.remove("firstScreen");
    startScreen.classList.add("hidden");
    timerContent.classList.add("hidden");
    highScoScreen.classList.remove("hidden");
    hsTitle.textContent = "TOP 4 GREATEST CHALLENGERS IN HISTORY"
    var onlyOnce = false;
    if (onlyOnce = false) {
        proccessFinalScore();
        onlyOnce = true;    
    }

    // else if (onlyOnce) {}
    
}

function inputFinalScore(event) {
    event.stopPropagation();
    event.preventDefault();
    proccessFinalScore(scoreForm.elements["name-field"].value, score)
    console.log(scoreForm.elements["name-field"].value, score)
}

function proccessFinalScore(name, score) {
    var scoreRecord = {
        name: name,
        score: score
    }

    var highScores = JSON.parse(localStorage.getItem("HighScores"));
    if (highScores) {
        highScores.push(scoreRecord);
    } 
    
    else {
        highScores = [];
        highScores.push(scoreRecord);
    }
    localStorage.setItem("HighScores", JSON.stringify(highScores));
    showFinalScore(highScores);
}

function showFinalScore(highScoresArray) {
    var sortedScores = highScoresArray.sort((a, b) => b.score - a.score);
    if (sortedScores.length > 4) {
        sortedScores = sortedScores.splice(0, 4);
    }
    var scorelist = document.createElement("ul");
    sortedScores.forEach(scoreRecord => {
        var recordEl = document.createElement("li");
        recordEl.textContent = scoreRecord.name + "  " + scoreRecord.score;
        scorelist.appendChild(recordEl);
    });
    highScoScreen.append(scorelist);
    hsTitle.textContent = "TOP 4 GREATEST CHALLENGERS IN HISTORY";
    questScreen.classList.add("hidden");
    highScoScreen.classList.remove("hidden");
    doneScreen.classList.add('hidden');

}


function shuffleOrder (order) {
    var count = order.length;
    while (count > 0) {
        var index = Math.floor(count * Math.random());
        count--;
        var temp = order[count];
        order[count] = order[index];
        order[index] = temp;
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
        score = timerVal;
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
        blurbScreen.classList.add("hidden");
    } else {
        nextquestion ();
    }
}

function showQuizEnd () {
    questScreen.classList.add("hidden");
    timerContent.classList.add('hidden');
    doneScreen.classList.remove('hidden');
    // score = timerVal;
    timerScore.textContent = + "  " + score;
}