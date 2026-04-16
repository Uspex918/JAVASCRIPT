const formEl = document.querySelector(".form")
const loginInputEl = document.querySelector(".form__input[name='login']")
const passwordInputEl = document.querySelector(".form__input[name='password']")
const sumbitInputEl = document.querySelector(".form__button")


// console.dir(formEl)
// console.log(loginInputEl)
// console.log(passwordInputEl)
// console.log(sumbitInputEl)
//
// formEl.action = "/register"
// // formEl.id = "my-form"
// // formEl.method = "post"
// formEl.hidden = true
// console.log(formEl.action)
//
// formEl.setAttribute("data-some-value", "fine")
// console.log(formEl.getAttribute("data-some-value"))

// loginInputEl.value = "admin"
loginInputEl.setAttribute("value", "valueFromSet")
console.dir(loginInputEl.value)
console.log(loginInputEl.getAttribute("value"))

console.log(formEl.attributes)

// formEl.action = "/register"
// console.log(formEl.getAttribute("action"))

// formEl.setAttribute("method", "post")
// console.log(formEl.method)

