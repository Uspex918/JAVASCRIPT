// const boxElement = document.querySelector(".box");
// boxElement.scroll(10,50)
//
// const {
//    offsetWidth, offsetHeight, clientLeft, clientTop, clientWidth, clientHeight,
//    scrollWidth, scrollHeight, scrollLeft, scrollTop
// } = boxElement
//
//
// console.log(offsetWidth, offsetHeight)
// console.log(clientLeft, clientTop)
// console.log(clientWidth, clientHeight)
// console.log(scrollWidth, scrollHeight)
//
//
//
// console.log(scrollLeft, scrollTop)

const boxEl = document.querySelector(".box");
const boxElRectPar = boxEl.getBoundingClientRect()

console.log(boxElRectPar.top + window.scrollY);