// //Function declaration
// // тип функции - объект
// function great1() {
    
// }
// //Function Expression
// const great2 = function () {
    
// }
// let counter = 0
// const interval = setInterval(function() {
//     if(counter ==5) {
//         clearInterval(interval)
//     }
//     else{
//         ++counter
//     }
//     console.log(counter)
// }, 2000)

// const name = 'Max'
// const age = 22
// //Function declaration:
// function greet(name) {
//     console.log('Hello - ', name)
// }
// //Arrow function:

// const arrow = (name, age) => {
//     console.log('Hello - ', name, age)
// }

// const pow2 = (num, exp) => Math.pow(num,exp)
// console.log(pow2(8,3))


// ///// -------- Default Parameters
// const sum = (a, b) => a + b

// console.log(sum(40,2))

let name = 'Maxim'

function createPerson(name) {
    return function(lastname) {
        console.log(name + ' ' + lastname)
    }
}

const addLastName = createPerson('Vlad')

console.log(addLastName('Ponomarenko'))