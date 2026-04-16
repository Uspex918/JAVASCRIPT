// function all() {
//     console.log(arguments);
// }
//
// all("Hi", 120, false)

// const hi = function (){
//     console.log("Hello World!");
// }
// hi()
//
// let g = 5
//
// const me = () => {
//     console.log("Hi")
//
//
// }
// me()

// function age(paremetr) {
//     console.log(this.price - paremetr);
// }
// const item = {
//     price: 100
// }
//
// const a = age.bind(item, 5)
// a()

// function CreateItem(title, price) {
//     this.title = title;
//     this.price = price;
//     // console.log(this)
// }
//
// const item1 = new CreateItem("Spagetti", 500)
//
// console.log(item1)


// const mes = (a, b) => {
//     a()
//     console.log("look")
//     b()
// }
//
// const fn1 = (s) => console.log("before", s)
// const fn2 = () => console.log("after")
//
//
// mes(() => fn1(100), fn2)

// const validate = (hasAccess) => {
//     if (hasAccess) {
//         return () => console.log("Доступ разрешен")
//     } else {
//         return () => console.log("Доступ запрещен")
//     }
// }
//
// const a = validate(true)
// a()
//
// const validate2 = () => {
//     return (hasAccess) => {
//         console.log(hasAccess ? "Доступ разрешен" : "Доступ запрещен")
//     }
// }
//
// const a2 = validate2()
// console.log(a2)
// a2()
