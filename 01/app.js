// //typeof - показывает тип элемента
// // Number(значение) - приводим к числу

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')


let action = ''

plus.onclick = function () {
    action ='+'
}

minus.onclick = function () {
    action ='-'
}


function printResult(result) {
    
    if(result < 0) {
        resultElement.style.color='red'
    } else {
        resultElement.style.color='green'
    }
    resultElement.textContent = result 
}
debugger
function computeNumbersWithAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    return actionSymbol = '+' ? num1 + num2 : num1 - num2 // тернарное выражение- если равно + то ..
}

submit.onclick = function () {
    const result = computeNumbersWithAction(input1,input2,action)
    printResult(result)
}



