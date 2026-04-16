// console.log(document.cookie)
//
// document.cookie = "username=Alex"
// document.cookie = "age=39"
// document.cookie = `${encodeURIComponent("date of birth")}=${encodeURIComponent("february 26, 1992")}`
//
// const setCookie = (name, value, options = {}) => {
//    let newEntryBody =
//       `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
//
//    const optionsAsString = Object.entries(options)
//       .map((entry) => entry.join("="))
//       .join("; ")
//    if (optionsAsString) {
//       newEntryBody += `; ${optionsAsString}`
//    }
//    document.cookie = newEntryBody
// }
//
// const deleteCookie = (name) => {
//    setCookie(name, "", {"max-age": -1})
// }
//
// setCookie("i am rich", "million of dollars")
//
// document.cookie = "какие-то данные"
//
// console.log(document.cookie)
//
// const getCookie = (name) => {
//    for (const entryStr of document.cookie.split("; ")) {
//       const [entryName, entryValue] = entryStr.split("=")
//
//       if (decodeURIComponent(entryName) === name) {
//          return decodeURIComponent(entryValue)
//       }
//    }
// }
//
// deleteCookie("username")
//
// console.log(getCookie("username"))
// console.log(getCookie("i am rich"))
// console.log(getCookie("date of birth"))

// sessionStorage.setItem('username', 'Alex');
// sessionStorage.setItem('password', 12345);
// sessionStorage.setItem(
//    'user1',
//    JSON.stringify({
//       name: 'Bob',
//       age: 100,
//       isDeveloperOfHisLife: true,
//    })
//    );
//
//
//
//
//
// console.log(sessionStorage)
//
// console.log(localStorage)
//
// sessionStorage.clear()
//
// sessionStorage.removeItem('username');
//
//
//
// console.log(JSON.parse(sessionStorage.getItem("user1")))
// console.log(JSON.parse(sessionStorage.getItem("password")))
// console.log(sessionStorage.getItem("username"))


class ThemeSwitcher {
   selectors = {
      switchThemeButton: '[data-js-theme-switcher]',
   }

   themes = {
      dark: 'dark',
      light: 'light',
   }

   stateClasses = {
      isDarkTheme: 'is-dark-theme'
   }

   storageKey = 'theme'

   constructor() {
      this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
      this.setInitialTheme()
      this.bindEvents()
   }

   get isDarkThemeCached() {
      return sessionStorage.getItem(this.storageKey) === this.themes.dark
   }

   setInitialTheme() {
      document.documentElement.classList.toggle(
         this.stateClasses.isDarkTheme,
         this.isDarkThemeCached
      )
   }

   onClick = () => {
      sessionStorage.setItem(
         this.storageKey,
         this.isDarkThemeCached ? this.themes.light : this.themes.dark
      )

      document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
   }

   bindEvents() {
      this.switchThemeButtonElement.addEventListener('click', this.onClick)
   }
}

new ThemeSwitcher()