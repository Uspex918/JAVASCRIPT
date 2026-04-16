// const htmlEl = document.documentElement
// const bodyEl = document.body
//
// console.log(htmlEl.clientWidth)
// console.log(window.innerWidth)
// console.log(htmlEl.scrollWidth)
//
// console.log(htmlEl.clientHeight)
// console.log(window.innerHeight)
// console.log(htmlEl.scrollHeight)
//
// const fullPageHeight = Math.max(
//    htmlEl.clientHeight, htmlEl.scrollHeight, htmlEl.offsetHeight,
//    bodyEl.clientHeight, htmlEl.scrollHeight, bodyEl.offsetHeight
// )
//
// console.log(fullPageHeight)


// console.log(window.scrollX);
// console.log(window.scrollY);


// window.scroll({
//    top: 200,
//    behavior: 'smooth',
// })
//
// setTimeout(function () {
//    window.scrollBy({
//       top: 100,
//       behavior: 'smooth',
//    })
// }, 2000)


reviewSectionElement = document.querySelector(".reviews");

setTimeout(function(){
   reviewSectionElement.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
   })
   }, 300
)