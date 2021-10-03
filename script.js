// let timerCount = document.querySelector(".timer-count");
// let submitbtn = document.getElementById("submit-button");
// 
// let highscoreScreen = document.querySelector(".highscoreScreen")
// let doneScreen = document.querySelector(".doneScreen");
let h1 = document.getElementsByClassName("questions")
let startbtn = document.getElementById("start-button");
let firstScreen = document.getElementById("firstScreen");
let firstScreen1 = document.querySelector(".hide");
let questionScreen = document.getElementById("questionScreen");

startbtn.addEventListener("click", function () {
    firstScreen.classList.add("hide");
    firstScreen.classList.toggle("firstScreen");
    theGame();
})

var theGame = function () {
        // for (let i = 0; i >= 4; i++) 
        // s
             h1.innerHTML = "eggs on toast eggs on toast"
             questionScreen.classList.toggle("hide");

             console.log(h1)
             
            //  questionScreen.h1.innerText = questions[0]
        // }  
    }

// submitbtn.addEventListener("click", function () {
    
// })

var theScores = function () {

}

const questions = [
        "Commonly used data types DO NOT include: ",
        "The condition in an if / else statment is enclosed within _______. ",
        "Arrays in Javascript can be used to store ________.",
        "String values must be enclosed within _____ when being assigned to variables.",
        "A very useful tool used during development and debugging for printing to the debugger is: "
    ]

const answers1 = [
        "1. strings",
        "1. quotes",
        "1. numbers and strings",
        "1. commas",
        "1. JavaScript"
]

const answers2 = [
        "2. booleans",
        "2. curly brackets",
        "2. booleans",
        "2. curly brackets",
        "2. terminal / bash"
]

const answers3 = [
        "3. alerts",
        "3. parenthesis",
        "3. other arrays",
        "3. quotes",
        "3. for loops"
]

const answers4 = [
        "4. numbers",
        "4. square brackets",
        "4. all of the above",
        "4. parenthesis",
        "4. console.log"
]

const correctAnswer = [
        "3. alerts",
        "3. parenthesis",
        "4. all of the above",
        "3. quotes",
        "4. console.log"
]