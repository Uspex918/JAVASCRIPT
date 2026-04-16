// const obj1 = {name: "Alex"}
// const obj2 = obj1
//
// console.log(obj1 === obj2)
//
// obj2.age = 100
//
// console.log(obj1)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const obj1 = {
//     name: "Alexandr",
//     age: 32,
//     address: {
//         city: "Moscow",
//         population: 15_000_000_000,
//         some: {
//             city2: "London"
//         }
//     }
// }
// const obj2 = {
//     name: "Alexandr",
//     age: 32,
//     address: {
//         city: "Moscow",
//         population: 15_000_000_000,
//         some: {
//             city2: "London"
//         }
//     }
// }
//
//
// const areObjectsEqual = (object1, object2) => {
//     const keys1 = Object.keys(object1)
//     const keys2 = Object.keys(object2)
//     console.log("Массив ключей ", keys1, keys2)
//
//     if (keys1.length !== keys2.length) {
//         return false
//     }
//
//     for (const key in object1) {
//         const value1 = object1[key]
//         const value2 = object2[key]
//         const areValuesObjects = typeof  value1 === "object" && typeof  value2 === "object"
//
//         console.log("Значения по ключу объекта 1 :", value1)
//         console.log("Значения по ключу объекта 2 :",value2)
//         console.log("Является ли объектом? ", areValuesObjects)
//
//         if (areValuesObjects) {
//             return areObjectsEqual(value1, value2)
//         }
//
//         if (value1 !== value2) {
//             return false
//         }
//     }
//     return true
// }
// console.log(areObjectsEqual(obj1, obj2))
////////////////////////////////////////////////////////////////////////////////////////////////////////


// const obj1 = {name: "Alexandr"}
// // const obj2 = Object.assign({}, obj1)
// const obj2 = {...obj1}
//
// // for (const key in obj1) {
// //     obj2[key] = obj1[key]
// // }
//
//
// obj2.name = "Fillip"
//
//
// console.log(obj1)
// console.log(obj2)


// const obj1 = {name: "Alexander"}
// const obj2 = {
//     age: 28,
//     address: {
//         city: "New York",
//     }
// }
// const obj3 = {
//     age: 38,
//     isDeveloper: true,
//     address: {
//         zipcode: 8,
//     }
// }
//
// // const user = Object.assign({}, obj1, obj3, obj2)
// const user = {...obj1, ...obj2, ...obj3}
//
// console.log(user)

// const user = {
//     name: "Alexandr",
//     age: 28,
//     address: {
//         city: "Moscow",
//         zipcode: 123456
//     }
//
// }
//
// console.log(user.address?.city)
// console.log(user.age)

// const guest1 = {
//     name: "Vasily",
//     age: 30,
//     orderInfo: {
//         roomType: 2,
//         stayDates: {
//             from: "2021-01-01",
//             to: "2022-01-01"
//         }
//     }
// }
//
// const guest2 = {
//     name: "Ekaterina",
//     age: 25
// }
//
// const logGuestInfo = (guest) => {
//     console.log(`
//     Имя: ${guest.name}
//     Возраст: ${guest.age}б
//     Дата выезда: ${guest.orderInfo?.stayDates?.to ?? "Не указана"}
//     `)
// }
//
// logGuestInfo(guest1)
// logGuestInfo(guest2)

// const user = {
//     name: "Alexandr",
//     age: 28,
//     isDeveloper: true,
// }
//
// const {name, age, isDeveloper} = user
//
//
// console.log(name)
// console.log(age)
// console.log(isDeveloper)

// const logAddress = ({city, street, houseNumber, apartmentNumber}) => {
//
//
//     console.log(`
//     город ${city}, улица ${street},
//     дом ${houseNumber}, квартира ${apartmentNumber},
//     `)
// }
//
// logAddress({
//     city: "Moscow",
//     street: "Pushkina",
//     houseNumber: 8,
//     apartmentNumber: 5,
// })

// const user = {
//     name: "Alexandr"
// }
//
// const admin = {
//     name: "Boss"
// }
//
// const {name: userName} = user
// const {name: adminName} = admin
//
//
// console.log(userName)
// console.log(adminName)

// const user1 = {
//     name: "Alexandr",
//     age: 28,
//     city: "Moscow"
// }
//
// const user2 = {
//     name: "Maksim",
//     age: 5
// }
//
// const {city = "не указан"} = user2
//
// console.log(city)

// const user = {
//     city: "Moscow"
// };
//
// const {city: userCity = "не указано"} = user;
//
// console.log(userCity)



const logUser = (user) => {
    const {name, age, city, ...mainInfo} = user;

    console.log(`
    Имя ${name}
    Возраст ${age},
    Город ${city},
    `)

    console.log(mainInfo);
}

logUser({
    name: "George",
    age: 37,
    city: "Tbilisi",
    companyFounder: "dgiurad.ge",
    fortune: "Millionaire"
})














