// document.addEventListener('keydown', (event) => {
//    console.log(event)
// })
// document.addEventListener('keyup', (event) => {
//    console.log(event)
// })

// document.addEventListener('keydown', (e) => {
//
//    if (!e.target.matches("input")) {
//       return
//    }
//    if (/\d/.test(e.key)) {
//       e.preventDefault()
//    }
//
//
//
//
// })

// const inputElement = document.querySelector("input");
// const nameOutputElement = document.querySelector(".name-output");

// inputElement.addEventListener("input", (e) => {
//    console.log("Нажата клавиша: ", e.key)
//
//    nameOutputElement.textContent = inputElement.value;
// })
// const errorMessageElement = document.querySelector("#error-message");
//
// inputElement.addEventListener("change", function(event) {
//    const isInvalid = inputElement.value.length < 5
//
//    inputElement.classList.toggle("is-invalid", isInvalid)
//    errorMessageElement.textContent = isInvalid
//       ? "Minimal length is 5 symbols"
//       : ""
// })


document.addEventListener('cut', (e) => {
   console.log('cut', e);
   // console.log(e.clipboardData.getData('text/plain'));
   navigator.clipboard.readText().then(cbText => {
      console.log('clipboardText', cbText);
   })
})
document.addEventListener('copy', (e) => {
   console.log('copy', e);
   // console.log(e.clipboardData.getData('text/plain'));
   navigator.clipboard.readText().then(cbText => {
      console.log('clipboardText', cbText);
   })
})
document.addEventListener('paste', (e) => {
   console.log('paste', e);
   // console.log(e.clipboardData.getData('text/plain'));
   navigator.clipboard.readText().then(cbText => {
      console.log('clipboardText', cbText);
   })
})