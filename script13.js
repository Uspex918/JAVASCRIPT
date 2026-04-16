const user = {
    name: "Alexander",
    age: 28,
    logInfo() {
        console.log(`
        Имя: ${this.name}
        Возраст: ${this.age}
        `)
    },
    getIsAdult() {
        return this.age >= 18
    }
}

user.logInfo()
console.log(user.getIsAdult())

const price = 99.99
const roundedPrice = price.toFixed()

console.log(roundedPrice)


console.log((1.005).toFixed(2))

const num = 100.055

console.log(num.toPrecision(4))
console.log(num.toFixed(4))

const num = 100
const numAsString = num.toString();
const numAsStringFn = String(num)


console.log(num)
console.log(numAsString)
console.log(numAsStringFn)

const nums = [1, 2, 3, 4, 5, -5, 0 ,100];

console.log(Math.min(...nums))


const numberAsString = "100px"

console.log(parseInt(numberAsString))