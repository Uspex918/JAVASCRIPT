// const arr = [1,2,2,3];
// const unique = new Set(arr);
//
// unique[4] = 10
//
//
// console.log(arr);
// console.log(unique);
//
//
// const users = new Map();
//
// const d = [...users.set({ name: "John"}, 2)];
//
// console.log(d);

// const user = {
//     name: "Fedor",
//     salary: 1_000_000,
//     city: "Antalya"
// }
//
// const entries = Object.entries(user)
// console.log(entries)
//
//
// const entriesFormatted = entries.map(([key, value]) => {
//    return [key.toUpperCase(), `~~${value}~~`]
// })
//
// console.log(entriesFormatted)
//
// const obj = Object.fromEntries(entriesFormatted)
// console.log(obj)


// const data = new Map([
//     [1, "Number"],
//     ["1", "String"],
//     ["2", ["Number2", "String2"]],
//         ])
// data.set(5, "fff")
//
// console.log(data)
// console.log(data.get(1))
// console.log(data.has(5))
// console.log(data.size)
// console.log(data.keys())
// console.log(data.values())
// console.log(data.entries())
//
// for (const k of data.keys()) {
//     console.log(k)
// }
// for (const v of data.values()) {
//     console.log(v)
// }
// for (const k of data.entries()) {
//     console.log(k)
// }

// const obj = {
//     name: "Mike",
//     age: 35
// }
//
// const map = new Map(Object.entries((obj)))
//
// console.log(map)
//
// const objAgain = Object.fromEntries(map)
// console.log(objAgain)
//
//
// map.forEach((value, key) => {
//     console.log(`${key}: ${value}`)
// })


const set = new Set()
set.add("me")

console.log(set)