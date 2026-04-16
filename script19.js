class Student {
    planet = "Earth"
    country = "USA"
    region

    constructor(name, age, hasExperience) {
        this.name = name
        this.age = age
        this.experience = hasExperience
    }

    logName() {
        return this.name
    }
    isAdult() {
        return this.age >= 18
    }
    isReadyToWork() {
        return this.experience
    }
}

const firstStudent = new Student('John', 39, true)
const secondStudent = new Student('Anton', 22, false)

console.log(firstStudent.name)
console.log(secondStudent.logName())

class Student {
    #city = null

    country = "USA"

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.#someSecretAction()
    }

    set city(value) {
        this.#city = value;
    }
    get city() {
        return `г. ${this.#city.toUpperCase().split('').join(' ')}`;
    }

    #someSecretAction() {

    }
}

const firstStudent = new Student("Vasya", 25);

firstStudent.city = "Moscow"



console.log(firstStudent.country)

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {console.log("Ем...")}
    sleep() {console.log("Сплю...")}
}

const person1 = new Person("John", 33);

person1.eat();
person1.sleep();


class Developer extends Person {
    writeCode() {
        console.log("Пишу код...")
    }
    sleep() {
        console.log("I want to...")
        this.writeCode()
    }
}
const person2 = new Developer("Anton", 44)

person2.sleep()

console.log(person2)


class JavaScriptDeveloper extends Developer {
    makeFrontend() {console.log("I'm working...")}
    eat() {
        super.eat()
        console.log("И кайфую...")
    }
}

const person3 = new JavaScriptDeveloper("Stepan", 30)


person3.eat()




class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {console.log("Ем...")}
    sleep() {console.log("Сплю...")}
}
class Developer extends Person {
    constructor(name, age, experience) {
        super(name, age)
        this.experience = experience
    }
    writeCode() {
        console.log("Пишу код...")
    }
    sleep() {
        console.log("I want to...")
        this.writeCode()
    }
}

const person = new Developer("Mike", 33, 5)

console.log(person)