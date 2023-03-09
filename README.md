![a6696fe73975df391bc9af9871588865](https://user-images.githubusercontent.com/107282884/224126307-ecb20668-dc32-43a3-b502-032377383f9f.png)

https://justinnavarr0-ga.github.io/Quizzicle/

## **Game Description:**

This is a quiz game implemented by using the fundamentals of HTML, CSS and JavaScript.

Player will be given a series of questions related to JavaScript and must identify the correct answer to each one. 

The only way to win is to answer correctly on the first try.

*Quiz questions and answers will **not** change throughout the entirety of the quiz.*



##

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

```
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

I was stuck on this for an entire work day and after just reviewing what we learned I realized it would be easier to compare the values of Strings to one another. 

**I ended up structuring the questions like this:**

```
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

```function renderQuestion () {
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
        
    })```
