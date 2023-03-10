/*----- constants -----*/
   let display = document.getElementById('CONTENT')
   let START = document.getElementById('START')
   let RESTART = document.getElementById('RESTART')
   let buttons = document.getElementById('buttons')
   let LOSE = document.getElementById("LOSE")
   let container = document.getElementById("container")
   let currentQuestion = 0


    const outcomes = [  {content: "WRONG ANSWER"},
                    {content: "Congratulations, you won!!! You get to keep your life and Javascript knowledge!"}
                 ];

    const questions = [{
    content: "Your invitation will be arriving shortly."
    }, 
    {
    content: "You have been chosen to participate in The SQUI- i mean The JAVASCRIPT QUIZ game.",
    choices: ["CONTINUE"],
    answer: "CONTINUE"
    },
    {
    content: "You will only have ONE CHANCE to get through a series of questions.",
    choices: ["CONTINUE"],
    answer: "CONTINUE"
    },
    {
    content: "If you fail, you will be terminated",
    choices: ["CONTINUE"],
    answer: "CONTINUE"
    },
    {
        content: "Checkpoint has been created. Start Quiz now?",
        choices: ["START QUIZ"],
        answer: "START QUIZ"
    }, 
    {
        content: "Which of the following choices is NOT a primitive data type?",
        choices: ["Boolean", "Null","Undefined", "Array"],
        answer: "Array"
    },
    {
        content: "Which of the following choices is NOT a JavaScript Object?",
        choices: ["Date","String","Function","Error"],
        answer: "String"
    },
    {
        content: "An object is a collection of zero or more...",
        choices: ["properties","methods"],
        answer: "properties"
    },
    {
        content: "What type of for loop is used to iterate over the keys of an object?",
        choices: ["forEach","for...in","for...you","Wendys Four for 4"],
        answer: "for...in"
    },
    {
        content: "What can classes be used for in OOP?",
        choices: ["create objects","school","Encapsulation","Instantiation"],
        answer: "create objects"
    },
    {
        content: "What is the process of creating an object?",
        choices: ["Instantiation","instantiate","instance","instant oatmeal"],
        answer: "Instantiation"
    },
    {
        content: "What is an object created by a class?",
        choices: ["instantiation","instantiate","instance","instant oatmeal"],
        answer: "instance"
    },
    {
        content: "The ______ method can only be called on the class itself.",
        choices: ["Prototype", "Static","callback"],
        answer: "Static"
    },
    {
        content: "The ________ method can only be called on an instance of the class.",
        choices: ["Static","Prototype","callback"],
        answer: "Prototype"
    },
    {
        content: "The BEST INSTRUCTOR IS.....",
        choices: ["Kenneth","Matthew","Payne", "Evan", "They are all great!!!", "None of them"],
        answer: "They are all great!!!"
    },
    ]

/*----- event listeners -----*/
 START.addEventListener('click', renderQuestion)
 RESTART.addEventListener('click', Checkpoint)
 
/*----- functions -----*/
 init ();
 function init() {
        currentQuestion = 0
        renderInitial ();
 }

 function Checkpoint() {
    RESTART.style.display = "none"
    buttons.style.display = "none"
    LOSE.style.display = "none"
    document.body.style.backgroundColor = "white"
    container.classList.add("hidden")
    buttons.innerHTML = ""
    currentQuestion = 3
    renderQuestion ();
 }

 function iterateQ () {
 if (currentQuestion >= (questions.length) - 1){
    renderWin()
 } else {
    buttons.innerHTML = ""
    renderQuestion(currentQuestion)
 }
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
            } else {
                renderLoss()
            }
        })
        
    })
 START.style.display = "none";
 RESTART.style.display = "none";
 buttons.style.display = "grid"
 }

 function renderInitial () {
    var currentQuestion = 0;
    buttons.innerHTML = ""
    display.innerHTML = questions[currentQuestion].content 

    START.style.display = "flex"
    RESTART.style.display = "none"
    buttons.style.display = "none"
    LOSE.style.display = "none"
    document.body.style.backgroundColor = "white"
    container.classList.add("hidden")
 }

 function renderLoss () {
    display.innerHTML = outcomes[0].content 
    START.style.display = "none"
    RESTART.style.display = "flex"
    buttons.style.display = "none"
    LOSE.style.display = "flex"
    document.body.style.backgroundColor = "red"
 }
 function renderWin () {
    display.innerHTML = outcomes[1].content;
    RESTART.style.display = "flex"
    START.style.display = "none"
    buttons.style.display = "none"
    container.classList.remove("hidden")
 }