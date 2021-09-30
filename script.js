
let startbtn = document.getElementById("start-button");
// let nextbtn = document.getElementById("next-button");
startbtn.addEventListener("click", function () {
    startbtn.classList.add("hide")
    nextbtn.classList.remove("hide")
})

const questions = [
    {
        question:"Commonly used data types DO NOT include: ",
        answers: ["1. strings","2. booleans","3. alerts","4. numbers"],
        answer:"3. alerts"
    },
    {
        question:"The condition in an if / else statment is enclosed within _______. ",
        answers:["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
        answer:"3. parenthesis"
    },
    {
        question:"Arrays in Javascript can be used to store ________.",
        answers:["1. numbers and strings","2. booleans","3. other arrays","4. all of the above"],
        answer:"4. all of the above"
    },
    {
        question:"String values must be enclosed within _____ when being assigned to variables.",
        answers:["1. commas","2. curly brackets","3. quotes","4. parenthesis"],
        answer:"3. quotes"
    },
    {
        question:"A very useful tool used during development and debugging for printing to the debugger is: ",
        answers:["1. JavaScript","2. terminal / bash","3. for loops","4. console.log"],
        answer:"4. console.log"
    }
    ]