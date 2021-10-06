$(document).ready(function () {


    // let startbtn = document.getElementById("start-button");
    // let firstScreen = document.getElementById("firstScreen");
    // let questionScreen = document.getElementById("questionScreen");
    // let h1 = document.getElementById("questions");
    // let a1 = document.getElementById("answers1");
    // let a2 = document.getElementById("answers2");
    // let a3 = document.getElementById("answers3");
    // let a4 = document.getElementById("answers4");



    // click event handler using the .on() method
    $("#start-button").on("click", function () {
        $("#firstScreen").hide();
        $("#questionScreen").show();

        theGame();
    })

    let count = 0;

    function theGame() {
        // for (let i = 0; i < allQuestions.length; i++) {
        //      console.log(allQuestions[i].question)
        //     //  $("#questions").append(allQuestions.question[i])

        // }
        
        if (count < allQuestions.length) {
            $("#questions").append(allQuestions[count].question)
            let theAnswers = $(".answers").toArray();
            for (let i = 0; i < 4; i++) {
                theAnswers[i].append(allQuestions[count].choices[i]);
            }

            $('#answers1, #answers2, #answers3, #answers4').click(function () {
                if (this.id == 'answers1') {
                    $("#questions").empty(allQuestions[count].question)
                    count++;
                    theGame();
                } else if (this.id == 'answers2') {
                    alert('Submit 2 clicked');
                } else if (this.id == 'answers3') {
                    alert('Submit 3 clicked');
                } else {
                    alert('Submit 4 clicked');
                }
            });
        }


    }



    const allQuestions = [{
            question: "Commonly used data types DO NOT include: ",
            choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
            answer: "3. alerts"
        },

        {
            question: "The condition in an if / else statment is enclosed within _______. ",
            choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
            answer: ""
        },

        {
            question: "Arrays in Javascript can be used to store ________.",
            choices: ["1. numbers and strings", "2. booleans", "3. other arrays", "4. all of the above"],
            answer: "4. all of the above"
        },

        {
            question: "String values must be enclosed within _____ when being assigned to variables.",
            choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
            answer: "3. quotes"
        },

        {
            question: "A very useful tool used during development and debugging for printing to the debugger is: ",
            choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
            answer: "4. console.log"
        }
    ];

})