// 1. press one number - we save the number
// 2. press the operator - save the operator
// 3. press second number - save second number 
// 4. press Equal sign - make calulation

// Variables
let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumArray = []

let display = document.getElementById('display')

// Function to call requirements into the calculator.= - numbers and operators
function getNumber(num) {
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

function getOperator(op){
    step = 2
    operation = op
}
// Function to clear the display back to 0 when necessary
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

const calculateEquals = () =>{
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
    } else if (operation === '-,+,*,/'){
        result = 'Hi Dennis'
        display.value = result
    }
}