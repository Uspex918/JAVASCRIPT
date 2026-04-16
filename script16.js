const data = ["Alex", 28]

const [name, age] = data

console.log(name)

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

letters.forEach((el, index, arr) => console.log(el, index, arr));

console.log(letters.indexOf("A"));

const users = [
    {
        name: "John",
        age: 32,
    },
    {
        name: "Johan",
        age: 42,
    },
    {
        name: "Smith",
        age: 53,
    }
]

console.log(
    users.findIndex((user) => user.name === "Johan")
)


const prices = [100,200,444,500,444,777]



console.log(prices.indexOf(500) !== -1)
console.log(prices.findIndex(price => price === 500) !== -1 )
console.log(prices.includes(500))


const users = [
    {
        name: 'John',
        id: 1,
    },
    {
        name: 'Franklin',
        id: 1,
    },
    {
        age: 45
    },
    {
        age: 45,
        id: 3
    }
]

console.log(users.some(function (item){
   return item.id === 1
}),
    users.find(user => user.id === 1),
    )

console.log(users.filter(user => user.id === 1))

console.log(users.filter(({name, age}) => {
    return name === "John" || age < 50
}));

const usersFiltered = users.map((el) => {
    return `${el.name} has a id number ${el.id}`
})

console.log(usersFiltered)


console.log(
    users.reduce((acc, user) => {
        return acc + (user.id || 0);
    }, 0),
    users.reduce((acc, user) => {
        return user.id > acc ? user.id : acc;
    }, 0)
)


const users2 = [
    { name: "Анна",  salary: 50000 },
    { name: "Иван",  salary: 70000 },
    { name: "Иван",  salary: 100000 },
]

// сумма зарплат
// users2.reduce((acc, u) => acc + u.salary, 0)  // 180000

// максимальная зарплата
// console.log(
//     users2.reduce((acc, u) => u.salary > acc ? u.salary : acc, 0)
// ) // 70000


debugger
const salarySum = users2.reduce((acc, el) => acc + el.salary, 0)

console.log(
    salarySum / users2.length
);

const names = [
    "Bob",
    "Аркадий",
    1,
    "",
    0,
    [],
    {}
]
const sortedNames = [...names].sort((a, b) => a - b);


console.log(
    sortedNames
)
