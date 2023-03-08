  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 

   let display = document.getElementById('CONTENT')
   let START = document.getElementById('START')
   let RESTART = document.getElementById('RESTART')
   let buttons = document.getElementById('buttons')



const outcomes = [  {content: "Unfortunately, you chose the wrong answer. You will now be terminated"},
                    {content: "Congratulations, you won!!! Heres ur prize money"}
                 ];


var currentQuestion = 0
const questions = [{
    content: "Welcome. You have been invited to participate in the javascript questions game. In this game you will only have one chance to get through 3 questions. Any wrong answers shall result in you being terminated. Good luck and enjoy the game.",
    choices: ["square","right answer","triangle","xxxxxxx"],
    }, //display shapes for initial screen
    {
        content: "This is question 1",
        choices: ["square","right answer","triangle","xxxxxxx"],
        answer: "right answer"
    },
    {
        content: "This is question 2",
        choices: ["square","circle","this one","xxxxxxx"],
        answer: "this one"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
    {
        content: "This is question 3",
        choices: ["hi","nah","triangle","xxxxxxx"],
        answer: "hi"
    },
]

  /*----- event listeners -----*/
 //code event listener for the button div 

 START.addEventListener('click', renderQuestion)
 RESTART.addEventListener('click', init)


 
  /*----- functions -----*/
 init ();

// create initialize function (make sure its called)
function init() {
    currentQuestion = 0
    renderInitial ();
}

//need function that iterates through questions array when true is clicked
function iterateQ () {
    buttons.innerHTML = ""
    renderQuestion(currentQuestion)
}


function renderQuestion () {
    currentQuestion = currentQuestion + 1
    display.innerHTML = questions[currentQuestion].content

    let choicesArray = questions[currentQuestion].choices
        choicesArray.forEach((choice) => {
        let buttonEl =  document.createElement('button')
        buttonEl.innerText = choice
        buttonEl.classList.add("button")
        buttons.append(buttonEl)

        buttonEl.addEventListener('click', checkQuestionValue => {
            
            let answer = questions[currentQuestion].answer
            if (choice === answer){
                iterateQ();
                if (currentQuestion + 1 >= (questions.length)){
                    renderWin()
                }
            } else {
                renderLoss()
            }
        })
        
    })

    START.style.display = "none";
    RESTART.style.display = "none";
    buttons.style.display = "grid"
}

//game restart functions
//when game starts up calls this function
function renderInitial () {
    var currentQuestion = 0;
    buttons.innerHTML = ""
    display.innerHTML = questions[currentQuestion].content 

    START.style.display = "flex"
    RESTART.style.display = "none"
    buttons.style.display = "none"
}

function renderLoss () {
    display.innerHTML = outcomes[0].content 
    START.style.display = "none"
    RESTART.style.display = "flex"
    buttons.style.display = "none"
    
}
function renderWin () {
    display.innerHTML = outcomes[1].content;
    RESTART.style.display = "flex"
    START.style.display = "none"
    buttons.style.display = "none"
}

function render() {
    renderInitial ();
    renderQuestion ();
    renderLoss ();
    renderWin ();
}