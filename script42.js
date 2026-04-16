// console.log(window.location)
//
// // setTimeout(function () {
// //    // window.location.reload()
// //    // window.location.assign('./catalog.html');
// //    // window.location.replace('./catalog.html');
// //    // window.location.href = './catalog.html';
// //
// // }, 3000)
//
// document.addEventListener("click", function(e) {
//    if (e.target.href) {
//       e.preventDefault();
//       window.location.href = e.target.href;
//    }
// })

// console.log(window.history)
//
// const backButtonElement = document.getElementById("back-button")
// const forwardButtonElement = document.getElementById("forward-button")
//
// backButtonElement.addEventListener("click", (e) => {
//    // window.history.back();
//    window.history.go(-2)
// })
//
// forwardButtonElement.addEventListener("click", (e) => {
//    window.history.forward();
// })
//
// const addToHistoryButtonElement = document.getElementById("add-to-history")
// const showHistoryButtonElement = document.getElementById("show-history")
//
// addToHistoryButtonElement.addEventListener("click", (e) => {
//    window.history.replaceState(
//       {example: "какой-то текст"},
//       "",
//       "./catalog.html",
//    )
// })
//
// showHistoryButtonElement.addEventListener("click", (e) => {
//    console.log("история", window.history)
// })


const filterFormElement = document.querySelector(".filter");

filterFormElement.addEventListener("submit", (e) => {
   e.preventDefault();
})

filterFormElement.addEventListener("change", (e) => {
   const formData = new FormData(filterFormElement);
   const formDataObject = Object.fromEntries(formData);
   const params = new URLSearchParams(formDataObject);
   // console.log(params);
   const paramsString = params.toString();
   // console.log(paramsString);



   // console.log(formDataObject);

   // const paramsString = Object.entries(formDataObject).map(([key, value]) => {
   //    return `${key}=${value}`;
   // }).join('&');
   // console.log(paramsString);

   window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${paramsString}`
   )
})

// window.location.search
//    .replace("?", "")
//    .split("&")
//    .forEach((qP) => {
//       const [name, value] = qP.split("=");
//
//       filterFormElement[name].value = value;
//    })

const paramsFromURL = new URLSearchParams(window.location.search);

paramsFromURL.forEach((value, name) => {
   const field = filterFormElement[name];

   if (field) {
      field.value = value;
   }
})

