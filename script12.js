console.log(this)

function fn() {
    console.log(this)
}
fn()


const user = {
    name: 'John',
    logThis() {
        console.log(this)
        console.log(user.name)
    },
    address: {
        city: "Moscow",
        country: "USA",
        logInnerThis: function () {
            console.log(this)
        }
    }
}

user.logThis()
user.address.logInnerThis()

const user1 = {name: "Misha"}
const user2 = {name: "Vasya"}

function logInfo() {
    console.log("this :", this)
    console.log("this.name :", this.name)
    console.log("---------")
}
logInfo()

user1.logName = logInfo
user2.logName = logInfo

console.log(user1)
console.log(user2)

user1.logName()
user2.logName()


const calculator = {
    read() {
        this.a = Number(prompt("Введите первое число", 0))
        this.b = Number(prompt("Введите второе число", 0))
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }
}
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
console.log(calculator)

let ladder = {
    step: 0,
    up() {
        this.step += 1;
        return this
    },
    down() {
        this.step -= 1;
        return this
    },
    showStep() {
        console.log("Текущая лестница ", this.step)
        return this
    }
}
ladder.up();
ladder.down();
ladder.showStep();


ladder.up().showStep();
