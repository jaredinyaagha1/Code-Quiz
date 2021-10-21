var quizQs = [{
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
var questionCounter = 0;
var score;
var resultTimer;

var timerEl = document.querySelector(".timer-count");
var startButtonEl = document.querySelector(".start-button");

startButtonEl.addEventListener("click", function (event) {
    console.log("game start, game start!");
    event.stopPropagation();
    event.preventDefault();
    timerVal = 60;
    score = 0;
    count = 0;
    timerEl.textContent = timerVal;

    timerEl.classList.remove('hidden');
    
})

answers.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();
});

function nextquestion () {
    var question = quizQs[questionCounter];
    quizQs.innerHTML = question.innerHTML;
    listAnswers(question.answers)
}

function listAnswers () {

}

function arrayShuffle (array) {
    var count = array.length;
    while (count > 0) {
        
    }
}