![a6696fe73975df391bc9af9871588865](https://user-images.githubusercontent.com/107282884/224126307-ecb20668-dc32-43a3-b502-032377383f9f.png)

<div align = "center">
 
![giphy](https://user-images.githubusercontent.com/107282884/224192998-1d9eb325-fc41-4bbf-ada0-02a0429c46a8.gif)
 
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![APPLE](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white)
![NETFLIX](https://img.shields.io/badge/Netflix-E50914?style=for-the-badge&logo=netflix&logoColor=white)

[Click HERE to test out your JavaScript knowledge](https://justinnavarr0-ga.github.io/Quizzicle/)

</div>

## **Game Description:**

This is a quiz game implemented by using the fundamentals of HTML, CSS and JavaScript.

Player will be given a series of questions related to JavaScript and must identify the correct answer to each one. 

The only way to win is to answer correctly on the first try.

*Quiz questions and answers will **not** change throughout the entirety of the quiz.*

## **Game Rules:**

 In this game you will only have one chance to get through X-AMOUNT of questions.
 
 User must select one of the provided answers. 

 Selecting the correct answer will allow you immediately move on to the next question. 

 Player must restart quiz from the first question if they choose incorrectly. 

 The quiz game is won by answering all questions correctly.

 ## Gameplay: 
 
 **Initial Startup Screen:**
 
 ![Startup PROJECT 1 GIF](https://user-images.githubusercontent.com/107282884/224135780-5098a53a-aa7e-4529-a760-44ba5763ad3a.gif)
 
 **Question 1 Screen:**
 ![Screenshot 2023-03-09 at 11 53 04 AM](https://user-images.githubusercontent.com/107282884/224142612-2ad23e42-c520-4897-a3b1-4d2330ffd8d7.png)


**Losing Screen:**

![Screenshot 2023-03-09 at 12 05 23 PM](https://user-images.githubusercontent.com/107282884/224142105-c8fd7562-64fc-45be-a508-15517a9aebd3.png)

**Winning Screen:**

 ![FINISHED GAMEPLAY (WIN)](https://user-images.githubusercontent.com/107282884/224140573-1fcdec76-b9b3-490d-b2bd-4dd76b4c42c4.gif)

## Problems faced:

One of the first problems I encountered writing this code was with the structure of my questions. 

Initially I structured my questions to be like this:

```js
{
    content: "Which of the following choices is NOT a primitive data type?",
    choices:[
            {text: "Boolean", rightAnswer: false }, 
            {text: "Null", rightAnswer: false },
            {text: "Undefined", rightAnswer: false },
            {text: "Array", rightAnswer: true }
            ]
},
```

However, I could not figure out how to code the event listener to check if that rightAnswer property was true or false. 

I was stuck on this for an entire work day and after just reviewing what I learned I had to attempt a method I understood better.

<p align = "center"> **SHOUTOUT TO KENDALL** </p>

After talking with him I realized it would be a lot easier to compare the values of Strings to one another. 

**I ended up structuring the questions like this:**

```js
{
    content: "Which of the following choices is NOT a primitive data type?",
    choices: ["Boolean", "Null","Undefined", "Array"],
    answer: "Array"
},
```

This ended up being a better way to code it because it was simple and cleaner. Also if you were to inspect the game using code from the first code block, you would be able to find out the answer to the question, which defeats the purpose of the game.

## 

Another problem I faced when writing this code was I tried to add an event listener and its function outside of this renderQuestion function because I was trying to group my eventListeners all together.

However, I realized I could not reference back to the values of the elements inside these buttons when coding the addEventListener function. 

It took me a while to realize I had to code the eventListener function inside the  renderQuestion function since the variables I used to compare the answers and choices were inside of the renderQuestion function which was creating those same buttons.  

```js
function renderQuestion () {
    currentQuestion = currentQuestion + 1
    display.innerHTML = questions[currentQuestion].content
//this was the hardest part for me to code
    let choicesArray = questions[currentQuestion].choices
        choicesArray.forEach((choice) => {
        let buttonEl =  document.createElement('button')
        buttonEl.innerText = choice
        buttonEl.classList.add("button")
        buttons.append(buttonEl)
//this was the second hardest part for me to code
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
}
```
Lastly, with the code above, I noticed the function for the questions only worked if I had a repeat of the last question for it to skip over.

```js
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

        
```
My solution to this right now was adding a conditional statement to the function that iterates over the questions. This is actually a more reusable code to call the renderWin function without needing to have a pointless repeat of the last question. 



## Technologies Used:
- HTML
- CSS
- Vanilla Javascript

## **Roadmap:**


Icebox features planned for the near future:

- In game Sound effects for 
     
    -_Button clicking_

    -_Winning the game_

    -_Losing/Restarting the game_

- Ominous Background Music 
- Transitioning effects between questions
- A visual confirmation that you answered the question correctly

## Contributing:

Feel free to use this SQUID GAMES themed quiz code and alter the questions to fit your needs. 

## Authors and Acknowledgements

Authors:

- Me

Acknowledgements: 
- Kenneth C. (Lead Instructor)
- Matthew G. 
- Evan M.
- Payne F.


Resources I used for the CSS of this project:

- [Confetti Effect](https://discourse.webflow.com/t/add-falling-confetti-with-css/103687)

- [Fading In Invitation Effect](https://www.geeksforgeeks.org/how-to-create-fade-in-effect-on-page-load-using-css/ )

- [Typewriter Text Effect](https://css-tricks.com/snippets/css/typewriter-effect/)

##
