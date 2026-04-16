console.log(window)

const divElement = window.document.createElement('div');
divElement.style.width = "100px"
divElement.style.height = "100px"
divElement.style.border = "2px solid red"

window.document.body.appendChild(divElement);

window.document.querySelector("div").remove()

window.document.addEventListener("click", event => {
   console.log(`Координаты клика, x${event.x} y ${event.y}`);
})

window.addEventListener("scroll", () => {
   console.log("Scroll coordinate", window.scrollY)
})

console.log("My browser", window.navigator.userAgent)
console.log(window.screen.height)
console.log(window.location.href)
console.log(window.history.length)

console.log(window.Math)
console.log(window.Object.keys({name: "Alex"}))
console.log(window.Number("123"))
console.log(window.Boolean(0))


console.log(window.navigator)
console.log(window.screen)
console.log(window.location)
console.log(window.frames)
console.log(window.fetch)
console.log(window.XMLHttpRequest)

console.log(window.document)


window.localStorage.setItem("kluch", JSON.stringify({id: 126}));

console.log(window.localStorage)

const id = JSON.parse(window.localStorage.getItem("kluch"));

console.log(id);

const arr = () => {
   const res =  fetch("https://jsonplaceholder.typicode.com/todos")
      .then(function (response) {return response.json();})
      .then(albums => console.log(albums[0]));

}

arr()

const innerHeight = 600;
console.dir(window.innerHeight)
console.log(innerHeight)





