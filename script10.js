const obj = {
    "it is": 5,
    "and-or": 10,
    address: {
        city: "Moscow",
        zipCode: 555
    },
    "sayHi": () => console.log("Hi"),
}


obj.sayHi()

const user = {
s
}
user.name = "Alexander"
user["is developer"] = true


delete user.name

console.log(user)

const name = "Alexander";
const age = 38;

const user = {
    name,
    age,
}

console.log(user);



const obj = {
    p123: "Example",
    [name]: 5

}

obj[`bla-bla-${2+3}`] = false

console.log(obj)


for (const key in obj) {
    console.log(key, obj[key])
}


const nums = {
    2: "Second",
    3: "Third",
    1: "First",
}

for (let num in nums) {
    console.log(num, nums[num])
}




































