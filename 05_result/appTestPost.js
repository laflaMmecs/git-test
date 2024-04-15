// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     id: 1124,
//     name: 'Maxim',
//     username: 'Ponomarenko',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));


  async function add() {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
              id: 1124,
              name: 'Maxim',
              username: 'Ponomarenko',
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            } 
        });
        const data = await req.json();
        // USERS = data;
    
    } catch(err) {
        list.style.color = 'red';
        list.innerHTML = err.message;
    }
}
add()