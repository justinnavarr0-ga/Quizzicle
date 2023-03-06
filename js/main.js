  /*----- constants -----*/
  //maybe put some music ??
  //1. create questions for game as objects 
    //display the initial question as instructions for the game 
    //you lose screen can be an object here too to display 

  /*----- state variables -----*/
  //2. identify games variables
  //player will get 1 life to get through three questions 
  let score; // player score will be 0 and computer will start at 3 points. points basically transfer to player as so when computer reaches 0 player wins
  //object key p is player score / c for computer
  //players key will be questions right computers will be questions left
    // boolean 1 true/ 3 false
  //let winner; //p-score = 3 means player wins. p-score < 3 is loss
    //let display; might be better name 
    //let buttons (not sure if i should keep displayed at all times)
  /*----- cached elements  -----*/


  /*----- event listeners -----*/
    //code event listener for the button div 

  /*----- functions -----*/
 init ();
// 3. create function that checks if player is correct

// create initialize function (make sure its called)
function init() {
score = {
    p: 0,
    c: 3
}; 

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