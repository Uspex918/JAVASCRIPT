// const boxElement = document.querySelector(".box")
// const firstParagraphElement = document.querySelector(".paragraph-1")

// firstParagraphElement.textContent = "Обновленный первый параграф"
// console.log(boxElement.textContent)

// console.log(boxElement.innerHTML)
// console.log(firstParagraphElement.innerHTML)
//
// boxElement.innerHTML += `
// Обновленный текст
//       <p>Новый параграф</p>
// `
//
//
// console.log(boxElement.outerHTML)

// boxElement.outerHTML = `
// <article>123</article>
// `

// boxElement.innerHTML += `
// <p class="paragraph-4">Четвертый параграф</p>
// `


// const newParagraphElement = document.createElement("p")
//
// newParagraphElement.textContent = "Четвертый параграф"
// newParagraphElement.classList.add("paragraph-4")
//
// console.log(newParagraphElement)
//
// boxElement.replaceWith(newParagraphElement)
//
// console.log(boxElement)

// const firstBoxElement = document.querySelector('.box-1');
// const secondBoxElement = document.querySelector('.box-2');
// const thirdParagraphElement = document.querySelector('.paragraph-3');
// const fourthParagraphElement = document.querySelector('.paragraph-4');
// const fifthParagraphElement = document.querySelector('.paragraph-5');
//
// const getNewParagraphElement = () => {
//    const newParagraphElement = document.createElement("p");
//    newParagraphElement.textContent = "новый параграф"
//    return newParagraphElement;
// }
// const newParagraphElement2 = document.createElement("p");
// newParagraphElement2.textContent = "новый параграф 2"
//
// const getNewArticleElement = () => {
//    const newArticleElement = document.createElement("article");
//    newArticleElement.textContent = "Новый элемент <article>";
//    return newArticleElement;
// }
//
// const posleNachala = `<p>После начала</p>`
// const posleOkonchanya = `<p>После окончания</p>`
// const peredOkonchaniem = `<p>Перед окончанием</p>`
// const peredNachalom = `<p>Перед началом</p>`
// const prostoText = '<p>Просто текст</p>'
//
// firstBoxElement.append(getNewParagraphElement(), getNewArticleElement());
// secondBoxElement.append(getNewParagraphElement(), getNewArticleElement());
// thirdParagraphElement.append(getNewParagraphElement(), getNewArticleElement());
// fourthParagraphElement.append(getNewParagraphElement(), getNewArticleElement());
// fifthParagraphElement.append(getNewParagraphElement(), getNewArticleElement());
//
// firstBoxElement.insertAdjacentHTML('afterbegin', posleNachala);
// secondBoxElement.insertAdjacentHTML('afterend', posleOkonchanya);
// thirdParagraphElement.insertAdjacentHTML('beforeend', peredOkonchaniem);
// fourthParagraphElement.insertAdjacentHTML('beforebegin', peredNachalom);
// fifthParagraphElement.outerHTML = prostoText;
//
// firstBoxElement.insertAdjacentElement('afterbegin', newParagraphElement2)
// fifthParagraphElement.replaceWith(newParagraphElement2)


// const firstBoxElement = document.querySelector(".box-1")
//
// const firstBoxElementClone = firstBoxElement.cloneNode(true)
//
// firstBoxElement.after(firstBoxElementClone)

const firstBoxElement = document.querySelector(".box-1")
const thirdBoxElement = document.querySelector(".box-3")

// thirdBoxElement.after(firstBoxElement)
thirdBoxElement.insertAdjacentElement('afterend', firstBoxElement)
firstBoxElement.insertAdjacentElement("beforebegin", thirdBoxElement)