  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 
  let i = 1
   let display = document.getElementById('CONTENT')
   let answer1 = document.getElementById('a')
   let answer2 = document.getElementById('b')
   let answer3 = document.getElementById('c')
   let answer4 = document.getElementById('d')
   let buttons = document.getElementById('buttons')
   let START = document.getElementById('START')
   

const outcomes = [
    {  index: 0,
        content: "Unfortunately, you chose the wrong answer. You will now be terminated"
    }
];
const Quiz = [{
    index: 0,
    content: "Welcome. You have been invited to participate in the javascript quiz game. In this game you will only have one chance to get through 3 questions. Any wrong answers shall result in you being terminated. Good luck and enjoy the game.",
    answers: ["square","circle","triangle","x"] 
    }, //display shapes for initial screen
    {   index: 1,
        content: "Question 1",
        answers: [{text: "square", rightAnswer:false},{text: "circle", rightAnswer: true},{text: "triangle", rightAnswer:false},{text: "x", rightAnswer:false}],
        
    },
    {   index: 2,
        content: "Question 2",
        answers: [{text: "square", rightAnswer:false},{text: "circle", rightAnswer: true},{text: "triangle", rightAnswer:false},{text: "x", rightAnswer:false}],
        
    },
    {   index: 3,
        content: "Question 3",
        answers: [{text: "square", rightAnswer:false},{text: "circle", rightAnswer: true},{text: "triangle", rightAnswer:false},{text: "x", rightAnswer:false}],
        
    },
    {  index: 4,
        content: "Congratulations, you won!!! Heres ur prize money"
    }
]

  /*----- state variables -----*/
  //2. identify games variables
    // answers boolean 1 true/ 3 false
    answer1.value = Quiz[i].answers[0].rightAnswer
    answer2.value = Quiz[i].answers[1].rightAnswer
    answer3.value = Quiz[i].answers[2].rightAnswer
    answer4.value = Quiz[i].answers[3].rightAnswer

    //let buttons (not sure if i should keep displayed at all times)

  /*----- cached elements  -----*/
 

  /*----- event listeners -----*/
 //code event listener for the button div 

 START.addEventListener('click', Start)
 buttons.addEventListener('click', handleClick)
 
  /*----- functions -----*/
 init ();
// 3. create function that checks if player is correct

// create initialize function (make sure its called)
function init() {
renderInitial ();
}

function Start() {
    display.innerHTML = Quiz[1].content 
    answer1.innerHTML = Quiz[1].answers[0].text
    answer2.innerHTML = Quiz[1].answers[1].text
    answer3.innerHTML = Quiz[1].answers[2].text
    answer4.innerHTML = Quiz[1].answers[3].text
    START.style.display = "none";
    i++;
 }   
//need function that iterates through quiz array when true is clicked
function iterateQ () {
       renderQuestion(i++) 
}
    
function handleClick () {
    //if answer true continue by iterateQ //else render initial 
    if (Quiz[i].answers.rightAnswer == true) {
        iterateQ();
    }else{
        renderLoss();
    }
}


function renderInitial () {
    let i = 1
    display.innerHTML = Quiz[0].content 
    answer1.innerHTML = Quiz[0].answers[0]
    answer2.innerHTML = Quiz[0].answers[1]
    answer3.innerHTML = Quiz[0].answers[2]
    answer4.innerHTML = Quiz[0].answers[3]
    START.style.display = "flex"
}

function renderQuestion (i) {
    display.innerHTML = Quiz[i].content 
    answer1.innerHTML = Quiz[i].answers[0]
    answer2.innerHTML = Quiz[i].answers[1]
    answer3.innerHTML = Quiz[i].answers[2]
    answer4.innerHTML = Quiz[i].answers[3]
}

function renderLoss () {
    display.innerHTML = outcomes[0].content 
}
function renderWin () {
    display.innerHTML = Quiz[4].content 

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