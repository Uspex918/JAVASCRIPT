// const user = {
//     name: "Alex",
//     age: 28,
//     city: "Moscow",
//     address: {
//         street: "ul. Pushkina, d.1 kv.1",
//         zipcode: 122342
// },
//     todos: ["sleep", "eat", "work", "train", "learn"],
//     hasCat: null,
//     yacht: true,
//     5: 5
// }
//
// const userAsString = JSON.stringify(user)
// const userAsUser = JSON.parse(userAsString)
//
// console.log(user)
// console.log(userAsString)
// console.log(userAsUser)

const arr = [
    "Anton",
    5,
    undefined
]


const arrStr = JSON.stringify(arr)
const arrFrom = JSON.parse(arrStr)

console.log(arr)
console.log(arrStr)
console.log(arrFrom)