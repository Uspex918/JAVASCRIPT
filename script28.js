const boxElement = document.querySelector(".box")

boxElement.style.cssText = `
width: 300px;
height: 400px;
border: 3px solid black;
`

// console.log(getComputedStyle(boxElement).width)
// console.log(getComputedStyle(boxElement, "::after").textDecoration)
console.dir(boxElement)

boxElement.classList.add('bG')
const boxElement2 = document.querySelector(".bG")

// const tt = false

// boxElement.classList.toggle("bG", tt)

console.log(boxElement.classList)
boxElement2.style.setProperty("background", "cyan")

