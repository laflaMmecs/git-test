//взяв в кавычке можно создать ключ с пробелами 'complex key': 'complex value'
//this указывает на тот же самый объект в контексте которого мы работаем
// стрелочная функция не создает свой собственный контекст, поэтому this в ней выводит window
// классические функции создают свой собственный контекст и поэтому this относится к тому объекту в контексте которого они определены
const person = {
  name: 'Vladilen',
  age: 29,
  isYoutuber: true,
  languages: ['ru', 'en'],
  address: {
    city: 'Saint-Petersburg',
    street: 'Nesvky',
  },
  'complex key': 'complex value',
  ['key_' + 21 * 2]: 'computed value',
  greet() {
    console.log('Greet from person', this)
  },
  arrow: () => {
    console.log('Person Arrow', this)
  },
  info() {
    console.log('Person name',this.name)
  },
}

// person.age++
// ///----цикл в объектах пишется с in, а чтоб проверка проходила только по собственным ключай объекта, а не с prototype, то надо добавить условия. Снизу пример
// for (let key in person) {
//   if(person.hasOwnPropety(key)){
//     console.log(person[key])
//   }
// }

//.keys - метод объекта, который возвращает ключи объекта

const logger = {
  keys(withText = true) {
    if (withText) {
      console.log('Object keys:', Object.keys(this))
    } else {
      console.log(Object.keys(this))
    }
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Key:', key)
      console.log('Value:', this[key])
    })
  },
}
// logger.keys(person)

// //-------МЕТОД bind Привязка контекста к функции, возвращает новую функцию, но не вызывает ее. Функция обращается к выбранному бъекту

// const bound = logger.keys.bind({ a: 1})
// //logger.keys - метод, но который обращается всегда к объекту {a: 1}
// bound()


// //-------МЕТОД call тот же что и bind но вызывает функцию сразу

// logger.keys.call({ a: 1})


//-------МЕТОД apply тот же что call, отличается от него тем что:
// logger.keys.call(person, false) // неограниченное кол-во параметров
// logger.keys.apply(person, [false]) // принимает всего лишь 2 параметра и второй параметр всегда массив

//------------------КЛАССЫ
// Классы позволяют создавать объекты, как в примере снизу:

// class Human {
//   isHuman = true
// }

// class Person {
//   constructor (name, age) {
//     this.name = name ?? 'Undefined name'
//     this.age = age ?? 'Undefined age'
//   }

//   sayHello() {
//     console.log('Hello from ', this.name)
//   }
// }
// //ТО что выше - это абстракция, ниже его реализация:
// const newPerson = new Person('maxim',19)

// console.log(newPerson.sayHello())


// //Наследование класса ----------------------------------
// super() - функция которая вызывает родительский конструктор
class Human {
  isHuman = true

  humanGreet() {
    console.log('greet from human')
  }
}

class Person extends Human {
  constructor (name, age) {
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
  }

  sayHello() {
    console.log('Hello from ', this.name)
  }
}
const newPerson = new Person('maxim',19)

console.log(newPerson.humanGreet())


