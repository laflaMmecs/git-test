
// callback - это функция переданная в другую функцию в качестве аргумента, позволяют гибко манипулировать функциями передавая их в качестве параметров


// function myFunc(callback) {
//     const a = [4, 5, 6];
//     let element = document.querySelector('.test')
//     callback(element,a)
// }

// function out(elem, arr) {
//     arr = [6,7,8]
//     elem.innerHTML = arr.join('-');
// }

// myFunc(out)


// fetch('https://cat-fact.herokuapp.com/facts')
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

// delay(()=> {
//     console.log('timeout')
// }, 2000)

// const delay = (time = 1000) => {
//     //-- Тут мы в промис обернули функцию:
//     const promise = new Promise((resolve,reject) => { //промис принимает всебя resolve,reject
//         setTimeout(() => {
//             resolve([1,2,3]) //готоворит что промис завершился
//             reject('Error')
//         }, time)//это ассинхронность
//     })
//     return promise
//     //--
// }

// delay(2500)
// .then((data) => { //данные resolve попадают параметров в then 
//     console.log('Timeout',data)
//     return data.map((x) => x**2)
// })
// .then((data) => { //данные resolve попадают параметров в then 
//     console.log(data)
// })
// .catch(err => { //catch ранит в себе ошибку
//     console.log(err)
// })
// .finally(() => console.log('fINALLY')) //ВЫЗЫВАЕТСЯ В ЛЮБОМ СЛУЧАЕ


// const getData = () => new Promise((resolve,reject) =>  {
//     resolve([1,3,4])
// }
// )

// async function asyncExample() {  //async - мы обозначаем что функция является ассинхронной, что позволит нам использовать await
//     try {
//         const data = await getData() // так как мы знаем что гетдада это промис, поэтому мы можем к нему применить оператор await
//         console.log(data)
//     } catch (e) {
//         console.log('err')
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExample()


// const car = {
//     model: 'Tesla',
//     year: 2023
// }

// const json = JSON.stringify(car)//переводим объект в json (метод stringify)
// const parsed = JSON.parse(json)//переводим json в объект (метод parse)
// //по сети не можем js передавать поэтому переводим в json


const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('click', (e) => {
    const value = e.target.value.toLowerCase()
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value)
    })
    render(filteredUsers)
})

async function start() {
    list.innerHTML = 'Загрузка...'
    try{
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
    }catch(err) {
        list.style.color = 'red'
        list.innerHTML = err.message
    }
}

function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(user) {
    return `<li class="list-group-item">${user.name}</li>`
 }

start()

////////////////////////////////PRACTIC////////////////////////////////////
