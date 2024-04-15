// Event Loop

// const timeout = setTimeout(() => {
//     console.log('after 2 seconds')
//  }, 2000)

//  setTimeout(() => {
//     console.log('after 3 seconds')
//  }, 3000)

// let count = 0
// setInterval(() => {
//     console.log('tick', ++count)
// }, 1000)
// тут неоч метод колбеками, колбэкхелл, много вложенности
// function delay(callback, time = 1000) {
//     setTimeout(callback, time)
// }

// delay(() => {
//     console.log('timeout')
// }, 2000)
// Для того чтобы корректно работать с ассинхронностью(результат работы доступен не сразу, а через некоторое время) есть специальная конструкция промисы:
//promise - обещание
//promise - функция(которая принимает в себя(в конструктор) еще две функции - resolve, reject) в которую мы оборачиваем любой ассинхронный код
// в resolve передаем то что хотим получить, в reject - что должны получить в случае ошибки
// const delay = (time = 1000) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([1,2,3])
//                                                                      //промис завершился
//         },time)
//     })
//     return promise
// }

// delay(2500)
// .then((data) => {
//     console.log('Timeout', data)
//     return data.map((x) => x ** 2)
// })
// .then((data) => {
//     console.log(data)
// })    

//у промиса есть метод then - потом, как я погнимаю then = callback, ченнинг
//у промиса есть метод catch - обрабатывает ошибку
//у промиса есть метод finally - этот метод вызывается в любом случае, тут мы можем например убрать индикатор загрузки


// const getData = () => new Promise((resolve) => resolve([1,2,3]))

// getData().then((array) => console.log(array))

//-------------ЕСТЬ ДРУГОЙ ПРИНЦИП ДЛЯ РАБОТЫ С АССИНХРОНЫМИ ДАННЫМИ ASYNC AWAIT------------------------------------

// const getData = () => new Promise((resolve) => resolve([1,2,3]))

// async function asyncExample() {
//     try{
//         const data = await getData()
//         console.log(data)
//     } catch(err) {
//         console.log(err)
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExample() 

const delay = (time = 1000) => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3])
        }, time)
    })
    return promise
}

delay(2500)
.then(() => {
    console.log('200 ok')
})