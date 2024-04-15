const names = ['Владилен','Елена','Игорь','Ксения']

// names.push('Алена') - добавляет в конец массива

// names.unshift('Алена') - добавляет в начало масива
//
//shift() - удаляет первый элемент из массива
//pop() - удаляет последний элемент из массива
//reverse - массив наоборот, * он его мутирует - меняет изначальный
//toReversed - тоже что и реверс но он не меняет , а возвращает новый
//sort - сортирует
//splice - он принимает в себя индекст того элемента с которого нам нужно начать работать и скок надо удалить, короче удаляет
//toSpliced - не меняет оригинальный массив

//(indexOf)так можно найти индекс в массиве, также, если мы не хотим изменять массив, а хотим создать копию(новый) с изменениями то можно использовать метод with:
// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index,'Елена Великая')
// names[index] = 'Елена Великая'
// console.log(newNames)


// ---------------------МЕТОД map-------------------------
// метод map нужен для работы с массивом, его менять
// map всегда возвращает новый массив с изменеными данными
// const capitalNames = names.map(function(name) {
//    const newName = name + '!'
//    return newName
// })

// const capitalNames = names.map(function (name,index) {
//    if(index == 1) {
//       return 'Елена Великая'
//    } else {
//       return newName = 'Имя: ' + name + ', Индекс: ' + index
//    }
    
// })
// console.log(capitalNames)


// // includes - позволяет понять, есть ли вообще такой элемент в массиве

// console.log(names.indexOf('Игорь') != -1)

const people = [
   {
      name: 'Владилен',
      budget: 4200
   },
   {
      name: 'Елена',
      budget: 15100
   },
   {
      name: 'Игорь',
      budget: 3000
   },
   {
      name: 'Ксения',
      budget: 7520
   }
]


// for (let person of people) {
//    if(person.budget == 7520) {
//       findedPerson = person
//    }
// }

// const findedPerson = people.find(function(person) {
//    if(person.budget == 7520) {
//       return true
//    } 
// })
// const finded = people.findIndex((p) => p.budget ==7520)
// console.log(finded)


//----------------метод filter!!!!!!!!!!!!!
// этот метод фильтрует элементы массива, никогда не меняет массив, а возвращает новый с изменениями
// let sumBudget = 0

// const filtered = people.filter(function(p){
//    return p.budget > 5000
// })
// console.log(filtered)
// //----------------forEach - метод который делает итерацию
// filtered.forEach(function(p) {
//    sumBudget = sumBudget +p.budget
// })


// const sumBudget = people
// .filter(p => p.budget > 5000)
// .map(p => p.budget)
// .reduce((acc, p) => acc + p, 0)

// console.log(sumBudget)

//--------------------------------- метод split превращает строчку в массив
const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('')
console.log(reversed)