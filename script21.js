// console.log("First message")
//
//
// setTimeout(() => {
//     try {
//         const names = ["Alex", "Stefan", "Lena"]
//
//         names.forEach(name => {
//             console.log(`Имя: ${name}`);
//         })
//
//
//     } catch (error) {
//         console.log(`Тут ошибочка ${error}`);
//         console.log(error.name)
//         console.log(error.message)
//         console.log(error.stack)
//     }
//
//
//     console.log("Last message")
//
// }, 3000)


// console.log("Start");
//
// try {
//    const userJSON = `{
//    "age":  28,
//    "name": "John"
//    }`
//
//    const user = JSON.parse(userJSON);
//    const {name, age} = user;
//
//    if (!name) {
//       const errMessage = "Имя пропущено";
//       throw new Error(errMessage);
//    }
//
//    console.log(`
//    Hello, ${name}!
//    Your age is ${age}!
//    `);
// } catch (e) {
//    console.log("Туточки ошибочка", e)
// } finally {
//    console.log("Я выполнюсь в любом случае")
// }
//
// console.log("End");
