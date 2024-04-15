// const list = document.querySelector('#list')
// const filter = document.querySelector('#filter')
// let USER = []

// filter.addEventListener('click',(e) => {
//     const value = e.target.value.toLowerCase()

// })

// async function start() {
//     list.innerHTML = 'Загрузка...'
//     try{
//         const request = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await request.json()
//         setTimeout (() => {
//         render(data)
//         }, 2000)
//     }
//     catch (err){
       
//     }
// }

// const render = (users) => {
//     const html = users.map(toHTML).join('')
//     list.innerHTML = html
// }

// function toHTML(user) {
//     return `<li class="list-group-item">${user.name}</li>`
// }
// start()


// const filter = document.querySelector('#filter')
// filter.addEventListener('click', (e) => {
//     const value = e.target.value
//     console.log(value)
// })


// const array = [1,5,6]
// let a = array.includes(1)
// console.log(a)

// let users = [
//     {
//         name:"Max",
//         age: 22
//     },
//     {
//         name:"Ivan",
//         age: 22
//     },
//     {
//         name:"Roman",
//         age: 26
//     },
//     {
//         name:"Igor",
//         age: 23
//     },
//     {
//         name:"Dmitri",
//         age: 22
//     },
// ]

// const list = document.querySelector('#list').users.map((user)=> {
//     return user
// })
// console.log(list)


const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let USERS = [];

filter.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const filteredUsers = USERS.filter((user) => {
        return user.name.toLowerCase().includes(value);
    });
    render(filteredUsers);
});


async function start() {
    list.innerHTML = 'Загрузка...';
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await req.json();
        USERS = data;
        render(data);
    } catch(err) {
        list.style.color = 'red';
        list.innerHTML = err.message;
    }
}

function deleteParent(e) {
    const parentElement = e.target.closest('.list-group-item');
    parentElement.remove();
}

start();

list.addEventListener('click', (e) => {
    if(e.target.classList.contains('btnDelete')) {
        deleteParent(e)
    }
})

function render(users) {
    list.innerHTML = users.map(toHTML).join('');
}

function toHTML(user) {
    return `<li class="list-group-item">
    ${user.name}
    <div style="display: flex;
    justify-content: justify-content:end;
    align-items: center;">
        <button type="button" class="btn btn-success custom-btn btnChose">Выбирать</button>
        <button type="button" class="btn btn-danger custom-btn btnDelete">Удалить</button>
    </div>
</li>`;
}
