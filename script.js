const inputValue = document.querySelector("#input-value")
const submitBtn = document.querySelector('.submitbtn');

const startBtn = document.querySelector('.startbtn')
const resultDiv = document.querySelector('.result')
const guessedNums = document.querySelector('.guessed-num')


let numToBeGuessed;
let yourGuesses = [];
startBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    numToBeGuessed= Math.floor(Math.random() * 101)
    console.log(numToBeGuessed)
    resultDiv.innerText = "Game started! Make a guess.";
    guessedNums.innerText = "";
    inputValue.value = ""
    yourGuesses = []
})


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    if(numToBeGuessed === undefined){
        resultDiv.innerText = "Please start the game first";
        return
    }
    //numToBeGuessed= Math.floor(Math.random() * 101)
    let guessedNum = parseInt(inputValue.value)
    
    if(isNaN(guessedNum)){
        resultDiv.innerText = "Please enter a number!";
    }

    yourGuesses.push(guessedNum)
    guessedNums.innerText = "Your guesses: " + yourGuesses.join(", ")

    if(numToBeGuessed == guessedNum){
        resultDiv.innerHTML = `Yahoo! You have guessed the number by <span class="highlight"> ${yourGuesses.length}</span> trial(s)`
    }
    else if(numToBeGuessed > guessedNum){
        resultDiv.innerText = "Too low!"
    }
    else{
        resultDiv.innerText = "Too high!"
    }

})