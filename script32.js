// const logAllEvents = () => {
//    console.log(
//       Object
//          .keys(window)
//          .filter(key => /^on/.test(key))
//          .map(eventName => eventName.slice(2))
//    )
// }
//
// logAllEvents()

// const logMessage = () => {
//    console.log("Произошел клик")
// }

// const buttonElement = document.querySelector("button");
//
// const logMessage = () => {
//    console.log("Произошел клик")
// }
// // buttonElement.onclick = logMessage
//
// buttonElement.addEventListener("click", () => {
//    console.log("clicked");
// })
// buttonElement.addEventListener("click", () => {
//    console.log("clicked-2");
// })

// const firstButtonElement = document.querySelector(".button-1")
// const secondButtonElement = document.querySelector(".button-2")

// const logMessage = (e) => {
//    console.log("clicked")
// }
//
// firstButtonElement.addEventListener("click", logMessage)
//
// secondButtonElement.addEventListener("click", (e) => {
//  firstButtonElement.removeEventListener("click", logMessage)
// })



// const buttonElement = document.querySelector("button");
//
// buttonElement.addEventListener("click", (event) => {
//    console.log(event.target)
// })

const first = document.querySelector(".box-1");
const second = document.querySelector(".box-2");
const third = document.querySelector(".box-3");

// first.addEventListener("click", function (event) {
//    console.log("clicked box-1", event.target, event.currentTarget, this);
// })
// second.addEventListener("click", function (event) {
//    console.log("clicked box-2", event.target, event.currentTarget, this);
// })
// third.addEventListener("click", function (event) {
//    console.log("clicked box-3", event.target, event.currentTarget, this);
// })

first.addEventListener("click", () => {
   console.log("clicked box-1");
})
second.addEventListener("click", (event) => {
   console.log("clicked box-2");
});
third.addEventListener("click", (event) => {
   console.log("clicked box-3");
})