  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 
    //display the initial question as instructions for the game 
    //you lose screen can be an object here too to display 

const Quiz = [
    {   index: 0,
        content: "Welcome. You have been invited to participate in the javascript quiz game. In this game you will only have one chance to get through 3 questions. Any wrong answers shall result in you being terminated. Good luck and enjoy the game."},

    {   index: 1,
        content: "Question 1",
        answers: [1,2,3,4]
    },
    {   index: 2,
        content: "Question 2",
        answers: [1,2,3,4]
    },
    {   index: 3,
        content: "Question 3",
        answers: [1,2,3,4]
    },
    {  index: 4,
        content: "Congratulations, you get won!!! Heres ur prize money"
    },
    {  index: 5,
        content: "Unfortunately, you chose the wrong answer. You will now be terminated"
    }
];

  /*----- state variables -----*/
  //2. identify games variables
  //player will get 1 life to get through three questions 
    let score; // player score will be 0 and computer will start at 3 points. points basically look like they transfer to player as so when computer reaches 0 player wins
  //object key p is player score / c for computer
  //players key will be questions right computers will be questions left
    // boolean 1 true/ 3 false
  //let winner; //p-score = 3 means player wins. p-score < 3 is loss

    //let buttons (not sure if i should keep displayed at all times)

  /*----- cached elements  -----*/


  /*----- event listeners -----*/
    //code event listener for the button div 

  /*----- functions -----*/
 init ();
// 3. create function that checks if player is correct

// create initialize function (make sure its called)
function init() {
// score = {
//     p: 0,
//     c: 3
// }; 
document.getElementById('QUESTION').innerHTML = Quiz[0].content 

questions = [
    //display instruction object question and render it
]
winner = null

//buttons-display- hidden?

//call the render function

}

//render startup screen function 

//iterate through the question objects function if question answered correctly if not set player points to 0 and you lose and have to restart? 

//possible interval for inbetween screens 

//update display if you lose