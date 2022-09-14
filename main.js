//users => copy users => change copy => use copy users with changes


const user = {
    name: "Bob", age: 23
} // #567
const user2 = user; // #567 - один объект, две ссылки

user2.name = "alex"
console.log(user.name) //"alex"

//{}, new Object(), Object.create() - создание нового объекта

const copyUser = {...user} //#999
// Object.assign() - устарело, JSON.stringify -> Json.parse()
//copyUser.name = user.name
//copyUser.age = user.age


console.log(copyUser)
console.log(copyUser === user) //false
console.log({} === {}) //false {}-инструкция, выполнение которого приведет к созданию объекта
console.log([] === []) // false
console.log(2 === 2) // true

const array = [1, 2, 3, 4, 5]
const copyArray = [...array]

const state = [{
    id: 1, name: "Bob", isStudent: true, address: {}
}, {
    id: 2, name: "Alex", isStudent: true, address: {}
}, {
    id: 3, name: "Ann", isStudent: true, address: {}
}, {
    id: 4, name: "Donald", isStudent: true, address: {}
}]
//const copyState = [...state] //поверхностная копия
/*
const copyState = [ //полная копия
    {...state[0]},
    {...state[1]},
    {...state[2]},
    {...state[3]},
]
*/

const copyState1 = state.map(st => ({...st, address: {...st.address}})) //тоже полная копия

//id = 3, "Ann" => "Anne"

const copyState = state.map(st => {
    return st.id === 3 ? {...st, name: "Anne"} : st
})

