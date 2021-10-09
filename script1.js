$(document).ready(function () {
let count = 0, eventDetails,
checker, i, event; 
// score = 60


const allQuestions = [{
        question: "Commonly used data types DO NOT include: ",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "3. alerts"
    },

    {
        question: "The condition in an if / else statment is enclosed within _______. ",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        answer: "3. parenthesis"
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

// click event handler using the .on() method
        $("#start-button").on("click", function () {
                $("#firstScreen").hide();
                $("#questionScreen").show();
                $("#questions").append(allQuestions[0].question)
                let theAnswers = $(".answers").toArray();
                for (let i = 0; i < 4; i++) {
                        theAnswers[i].append(allQuestions[count].choices[i]);
                    }
                // timerScore();
                })

        $('#answers1, #answers2, #answers3, #answers4').on("click", function (event) {
                $(this).data('clicked', true);
                answerChecker();
                questionLooper();
                eventDetails = event.target.textContent;
                return eventDetails
                })
        
        function answerChecker (eventDetails, checker) {

                if (eventDetails === allQuestions[count].answer) {
                        checker = 0;
                }

                else {
                        checker = 1;
                }
        }

        function questionLooper(count, checker) {
                if (count > 0) {
                        (".answers, #questions").empty()     
                }
                
                else if (count < allQuestions.length) {
                        $("#questions").append(allQuestions[count].question)
                        let theAnswers = $(".answers").toArray();
                        for (let i = 0; i < 4; i++) {
                                theAnswers[i].append(allQuestions[count].choices[i]);
                        }
                        count++
                }

                else {
                        checker = 2;
                }
                
        }

        function timerScore(checker, score) {
        // Function to update counters on all elements with class counter
                $('.timer-count').each(function () {
                score = parseInt($(this).html());

                if (score !== 0) {
                        $(this).html(score - 1);
        
                        if (checker = 1) {
                                $(this).html(score - 3);
                                }
                        else if (checker = 2) {
                                return score
                        }
                                
                }
                        });
        
                // Schedule the update to happen once every second
                
                }
        setInterval(timerScore, 1000);

        
})