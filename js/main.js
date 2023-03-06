  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 

const outcomes = [

    {  index: 1,
        content: "Congratulations, you won!!! Heres ur prize money"
    },
    {  index: 2,
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
        answers: [false,true,false,false]
    },
    {   index: 2,
        content: "Question 2",
        answers: [true,false,false,false]
    },
    {   index: 3,
        content: "Question 3",
        answers: [false,false,false,true]
    },
]

  /*----- state variables -----*/
  //2. identify games variables
  //player will get 1 life to get through three questions 
    let score; // player score will be 0 and computer will start at 3 points. points basically look like they transfer to player as so when computer reaches 0 player wins
  //object key p is player score / c for computer
  //players key will be questions right computers will be questions left
    // answers boolean 1 true/ 3 false
    // if false return to initial
    //if true iterateQ
  //let winner; //p-score = 3 means player wins. p-score < 3 is loss

    //let buttons (not sure if i should keep displayed at all times)

  /*----- cached elements  -----*/
   let display = document.getElementById('CONTENT')
   let answer1 = document.getElementById('a')
   let answer2 = document.getElementById('b')
   let answer3 = document.getElementById('c')
   let answer4 = document.getElementById('d')


  /*----- event listeners -----*/
    //code event listener for the button div 
    //code event listener for the navbar


  /*----- functions -----*/
 init ();
// 3. create function that checks if player is correct

// create initialize function (make sure its called)
function init() {
renderInitial ();
}

//need function that iterates through quiz array when true is clicked
function iterateQ () {
    for (let i = 1; i < Quiz.length; i++){
        //create condition if click event = true 
            renderQuestion(i)
    }
    
}
    



function renderInitial () {
    display.innerHTML = Quiz[0].content 
    answer1.innerHTML = Quiz[0].answers[0]
    answer2.innerHTML = Quiz[0].answers[1]
    answer3.innerHTML = Quiz[0].answers[2]
    answer4.innerHTML = Quiz[0].answers[3]
}

function renderQuestion (i) {
    display.innerHTML = Quiz[i].content 
    answer1.innerHTML = Quiz[i].answers[0]
    answer2.innerHTML = Quiz[i].answers[1]
    answer3.innerHTML = Quiz[i].answers[2]
    answer4.innerHTML = Quiz[i].answers[3]
}

function renderLoss () {
    display.innerHTML = outcomes[2].content 
}
function renderWin () {
    display.innerHTML = outcomes[1].content 

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