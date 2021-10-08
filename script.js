$(document).ready(function () {

    // click event handler using the .on() method
    $("#start-button").on("click", function () {
        $("#firstScreen").hide();
        $("#questionScreen").show();
        
        theGame();
        theTimer();
    })

    let count = 0;
    let score =60;
    let itsWrong = 0;
    
    function theGame() {

        if (count < allQuestions.length) {
            count++;
            console.log(count, allQuestions.length)
            $(".answers, #questions").empty()
            let theAnswers = $(".answers").toArray();
            $("#questions").append(allQuestions[count].question)
            
            for (let i = 0; i < 4; i++) {
                theAnswers[i].append(allQuestions[count].choices[i]);
            }

            $('#answers1, #answers2, #answers3, #answers4').on("click", function (event) {
                    $(this).data('clicked', true);
                    var eventDetails = event.target.textContent;
                    
                    // Stuck here vvvv in trying to see if the string in the button matches the string in the object 
                if (eventDetails === allQuestions[count].answer) {
                    
                        $(".Correct").removeClass("hide");
                        console.log("dwingo")
    
                    // count++;
                    theGame();

                }

                else {
                    event.stopPropagation();
                    console.log("(else) event details: ", eventDetails);
                    console.log("(else) answer: ", allQuestions[count].answer)
                    // count++;
                    theGame();

                    itsWrong = 1;
                    // alert(itsWrong)
                }
            
            });
        }

        else {
            $(".answers, #questions").empty()
            $("#questionScreen").hide();
        $("#doneScreen").show();
        }



    }

    function theTimer(score, itsWrong) {

        // Function to update counters on all elements with class counter
        var doUpdate = function () {
            $('.timer-count').each(function () {
                score = parseInt($(this).html());
                if (score !== 0) {
                    $(this).html(score - 1);

                    if (itsWrong = 1) {
                        score = 0;
                    }
                }

                
            });
        };

        // Schedule the update to happen once every second
        setInterval(doUpdate, 1000);
    }


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

})