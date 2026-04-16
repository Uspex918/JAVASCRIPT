// const loginEl = document.querySelector('#login')
//
//
// loginEl.addEventListener('focus', () => {
//    console.log('login focus')
// })
// loginEl.addEventListener('blur', () => {
//    console.log('login blur')
// })
//
// loginEl.focus()
// loginEl.blur()


document.addEventListener('focusin', (e) => {
   if (e.target.matches("#login"))
   console.log('focusin event', e);
})
document.addEventListener('focusout', (e) => {
   if (e.target.matches("#login"))

   console.log('focusout event', e);
})

