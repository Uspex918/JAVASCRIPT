// console.dir(document)
// console.log(document.documentElement)
// console.log(document.head)
// console.dir(document.body)
// console.log(document.body.parentElement)
// console.log(document.body.previousElementSibling)
// console.log(document.body.nextElementSibling)
// console.log(document.body.children)


// const bodyChildren = document.body.children
//
// console.log(bodyChildren)
//
// const newButtonEl = document.createElement("button")
//
// document.body.appendChild(newButtonEl)
//
// console.log(bodyChildren)
//
// const arrayFromHTMLCollection = [...bodyChildren]
//
// arrayFromHTMLCollection.forEach((el) => {
//    console.log("Дочерний элемент <body>: ",el)
// })
//
// const pElement = document.body.children[0]
//
// console.log(pElement.firstElementChild)
//
// console.log(pElement.parentElement)
// console.log(pElement.parentNode)
//
//
//
// console.log(document.documentElement.parentElement)
// console.log(document.documentElement.parentNode)

// const pEl2 = document.body.children[3]
//
// console.log(pEl2)
// console.log(pEl2.previousElementSibling)
// console.log(pEl2.previousSibling)
// console.log(pEl2.previousSibling.previousSibling)
// console.log(pEl2.previousElementSibling.previousElementSibling)
// console.log(pEl2.previousElementSibling.previousElementSibling.previousElementSibling)
// console.log(pEl2.previousElementSibling.previousElementSibling.previousSibling.previousSibling)



const htmlElements = document.body

console.log("htmlElements", htmlElements)

console.log(htmlElements.children)
console.log(htmlElements.childNodes)