// 1. press one number - we save the number
// 2. press the operator - save the operator
// 3. press second number - save second number 
// 4. press Equal sign - make calculation

// Setting the Variables
let firstNumber
let secondNumber
let decimal = document.querySelector('.decimal-btn') // important discuss for presentation
let step = 0
let operation = null
let result = 0

let numArray = []
let secondNumArray = []

let display = document.getElementById('display')

// Function to call requirements into the calculator.= - numbers and operators
function getNumber(num){
console.log (numArray.join(""))
    if(step === 0 || step === 1){ 
        // truthy / falsy operator: if true then keep step 0 if false then get step 1 which is to to take the number from array, make a string, then a number
        numArray.push(num) // [1,3,5,7]
        step = 1
        firstNumber = Number(numArray.join('')) // merge all numbers added in this step into one string then number
        display.value = firstNumber
    } else if (step === 2){
        // else if statement to take step 2 - get operator, when using any operator in between numbers. 
      secondNumArray.push(num)
      secondNumber = Number(secondNumArray.join('')) // merge all numbers added in this step into one string then number
      display.value = secondNumber
    }
}

// Decimal notes for presentation

function handleDecimal() {
    console.log("i just pressed the decimal button")
    console.log(display.value)
    if (display.value = undefined) {screen.textContent = 0.}
    if (!display.value.includes('.')) { // what does that Bang do doe
        display.value += '.';
    }
}

// PMVP feature - two consecutive operators will give message b/c my operators are connected*
function getOperator(op) {
    if(operation === null){
    step = 2
    operation = op // operation function is called by "op"
    } else {
        display.value = "Hi Friend" 
    }
}

// Function to clear the display back to 0 / null values when necessary
function clearDisplay(){
   display.value = 0
   firstNumber = null
   secondNumber = null
   step = 0
   operation = null
   result = 0
   numArray = []
   secondNumArray = []
}


// Calculation functions
const calculateEquals = () =>{
    console.log(firstNumber, secondNumber)

    if(operation === '+') {
        result = firstNumber + secondNumber
        display.value = result
    } else if (operation === '-'){
        result = firstNumber - secondNumber
        display.value = result
    } else if (operation === '*'){
        result = firstNumber * secondNumber
        display.value = result
    } else if (operation === '/'){
        result = firstNumber / secondNumber
        display.value = result
    } 
}