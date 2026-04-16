const sectionElements = document.querySelectorAll('section');


const animateSections = (sections) => {
   sectionElements.forEach(sectionElement => {
      sectionElement.classList.add('is-visible');
   })
}

document.addEventListener("preloaderClose", (event) => {
   console.log(event)
   animateSections();
})