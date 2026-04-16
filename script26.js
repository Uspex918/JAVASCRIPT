// const buttonElement = document.body.children[0].children[0].children[0].children[0]
//
// console.log(buttonElement)

// const buttonElement = document.getElementById("myButton");
// const buttonElement2 = document.querySelector("button")
// const buttonElement3 = document.querySelector("#myButton");
// const buttonElement4 = document.querySelector(`.box-1 > .box-2 > .box-3 > *:not(div)`);
//
// console.log(buttonElement)
// console.log(buttonElement2)
// console.log(buttonElement3)
// console.log(buttonElement4)


// const listItemEls = document.querySelectorAll(".List .item")
//
// console.log(listItemEls)
//
// listItemEls.forEach(el => {
//    console.log(el)
// })


// const wrapperEl = document.querySelector("#wrapper")
// const listEl = wrapperEl.querySelector(".list")
// const listItemEls = listEl.querySelectorAll(".item")
//
// console.log(listItemEls)
//
// const elements = document.querySelectorAll("#wrapper .item")
// console.log(elements)

// const thirdBoxEl = document.querySelector(".box-3")
//
// const firstBoxEl = thirdBoxEl.closest(".box-1")
//
// console.log(firstBoxEl)

// const listItemEls = document.querySelectorAll(`
//     .box-1,
//     .box-2,
//     .box-3
// `)
//
// console.log(listItemEls)

// const sliderEl = document.querySelector("[data-js-slider]")
// const sliderListEl = document.querySelector("[data-js-slider-list]")
// const sliderSlideEls = document.querySelectorAll("[data-js-slider-slide]")

// console.log(sliderEl)
// console.log(sliderListEl)
// console.log(sliderSlideEls)

const sE = document.querySelector("[data-js-slider]")
const sliderParams = JSON.parse(sE.getAttribute("data-js-slider"))
console.log(sliderParams)

