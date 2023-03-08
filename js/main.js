  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 

   let display = document.getElementById('CONTENT')
   let answer1 = document.getElementById('a')
   let answer2 = document.getElementById('b')
   let answer3 = document.getElementById('c')
   let answer4 = document.getElementById('d')
   let START = document.getElementById('START')
   let RESTART = document.getElementById('RESTART')
   let index = 1
   let rightAnswer;

const outcomes = [
    {  Oindex: 0,
        content: "Unfortunately, you chose the wrong answer. You will now be terminated"
    }
];
const Quiz = [{
    index: 0,
    content: "Welcome. You have been invited to participate in the javascript quiz game. In this game you will only have one chance to get through 3 questions. Any wrong answers shall result in you being terminated. Good luck and enjoy the game.",
    answers:   [{text: "square"},
                {text: "circle"},
                {text: "triangle"},
                {text: "x"}] 
    }, //display shapes for initial screen
    {   index: 1,
        content: "Question 1",
        answers: [{text: "square", rightAnswer:true},
                  {text: "circle", rightAnswer: false}, 
                  {text: "triangle", rightAnswer:false},
                  {text: "xxxxxxx", rightAnswer:false}],
        
    },
    {   index: 2,
        content: "Question 2",
        answers: [{text: "square", rightAnswer:true},
                  {text: "circle", rightAnswer: false},
                  {text: "triangle", rightAnswer:false},
                  {text: "xxxxxxx", rightAnswer:false}],
    },
    {   index: 3,
        content: "Question 3",
        answers: [{text: "square", rightAnswer:false},
                  {text: "circle", rightAnswer: false},
                  {text: "triangle", rightAnswer:false},
                  {text: "xxxxxxx",     rightAnswer:true}],
    },
    {  index: 4,
        content: "Congratulations, you won!!! Heres ur prize money"
    }
]

  /*----- state variables -----*/
  //2. identify games variables
    // answers boolean 1 true/ 3 false

    //let buttons (not sure if i should keep displayed at all times)

  /*----- cached elements  -----*/
 

  /*----- event listeners -----*/
 //code event listener for the button div 

 START.addEventListener('click', iterateQ)
 RESTART.addEventListener('click', renderInitial)

 answer1.addEventListener('click', checkQuestionValue)
 answer2.addEventListener('click', checkQuestionValue)
 answer3.addEventListener('click', checkQuestionValue)
 answer4.addEventListener('click', checkQuestionValue)
 
  /*----- functions -----*/
 init ();
//  if index = 4 renderWin();
// 3. create function that checks if player is correct

// create initialize function (make sure its called)
function init() {
renderInitial ();
}

//need function that iterates through quiz array when true is clicked
function iterateQ () {
    renderQuestion(index++)
}

function checkQuestionValue () {
   if (answer1.value === true) {
    iterateQ();
   } else if (answer2.value === true){
    iterateQ()
   } else if (answer3.value === true){
    iterateQ()
   } else if (answer4.value === true){
    iterateQ()
   } else {
    renderLoss()
   }

}
//after start button is pressed go through questions
// function Start() {
//     index = 1
//     display.innerHTML = Quiz[index].content 
//     answer1.innerHTML = Quiz[index].answers[0].text
//     answer2.innerHTML = Quiz[index].answers[1].text
//     answer3.innerHTML = Quiz[index].answers[2].text
//     answer4.innerHTML = Quiz[index].answers[3].text
//     START.style.display = "none";
//     index++;
//  }   

function renderQuestion (index) {
    display.innerHTML = Quiz[index].content 
    answer1.innerHTML = Quiz[index].answers[0].text
    answer2.innerHTML = Quiz[index].answers[1].text
    answer3.innerHTML = Quiz[index].answers[2].text
    answer4.innerHTML = Quiz[index].answers[3].text

    answer1.value = Quiz[index].answers[0].rightAnswer
    answer2.value = Quiz[index].answers[1].rightAnswer
    answer3.value = Quiz[index].answers[2].rightAnswer
    answer4.value = Quiz[index].answers[3].rightAnswer

    START.style.display = "none";
    RESTART.style.display = "none";
}
    
// function handleClick () {
//     //if answer true continue by iterateQ //else render initial 
//     if (Quiz[i].selectedValue == true) {
//         iterateQ();
//     }else if (Quiz[i].selectedValue == false){
//         renderLoss();
//     }
// }

//game restart functions

function renderInitial () {
    let i = 0
    display.innerHTML = Quiz[i].content 
    answer1.innerHTML = Quiz[i].answers[0].text
    answer2.innerHTML = Quiz[i].answers[1].text
    answer3.innerHTML = Quiz[i].answers[2].text
    answer4.innerHTML = Quiz[i].answers[3].text
    
    START.style.display = "flex"
    RESTART.style.display = "none"
    i++
}

function renderLoss () {
    display.innerHTML = outcomes[0].content 
    START.style.display = "none"
    RESTART.style.display = "flex"
}
function renderWin () {
    display.innerHTML = Quiz[4].content 
    RESTART.innerHTML = "RESTART"
}

function render() {
    renderInitial ();
    renderQuestion ();
    renderLoss ();
    renderWin ();
}
//render startup screen function 

//iterate through the question objects function if question answered correctly if not set player points to 0 and you lose and have to restart? 

//possible interval for inbetween screens using setinterval

//update display if you lose