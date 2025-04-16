
(() => {
    const form = document.querySelector('form')
const inputValue = document.querySelector("#input-value")

const submitBtn = document.querySelector('.submitbtn');

const startBtn = document.querySelector('.startbtn')
const resultDiv = document.querySelector('.result')
const guessedNums = document.querySelector('.guessed-num')


let numToBeGuessed= Math.floor(Math.random() * 101)
let yourGuesses = [];
//global variable can create vulnurability. So we need Immediately Invoked Function Expression or IIFE
// console.log(numToBeGuessed)
startBtn.addEventListener('click', (e)=>{
    numToBeGuessed= Math.floor(Math.random() * 101)
    // console.log(numToBeGuessed)
    resultDiv.innerText = "Game started! Make a guess.";
    guessedNums.innerText = "";
    inputValue.value = ""
    yourGuesses = []
    submitBtn.disabled = false;
    startBtn.disabled = true
})


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    //numToBeGuessed= Math.floor(Math.random() * 101)
    const guessedNum = parseInt(inputValue.value)


    yourGuesses.push(guessedNum)
    guessedNums.innerText = "Your guesses: " + yourGuesses.join(", ")

    if(numToBeGuessed == guessedNum){
        resultDiv.innerHTML = `Yahoo! You have guessed the number by <span class="highlight "> ${yourGuesses.length}</span> trial(s)`
        submitBtn.disabled = true
        startBtn.disabled = false
    }
    else if(numToBeGuessed > guessedNum){
        resultDiv.innerText = "Too low!"
    }
    else{
        resultDiv.innerText = "Too high!"
    }
    form.reset()


})
  })();
  