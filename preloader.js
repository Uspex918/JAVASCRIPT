const preloaderElement = document.querySelector('.preloader');


preloaderElement.addEventListener('animationend', (e) => {
   if (e.animationName === 'fade-out') {
      preloaderElement.dispatchEvent(
         new CustomEvent('preloaderClose', {bubbles: true, detail: {
            closeAnimationName: e.animationName,
               closeAnimationDuration: e.elapsedTime,
            }})
      );
   }
})