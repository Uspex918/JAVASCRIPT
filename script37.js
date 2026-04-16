// console.log(
//    document.forms.regForm
// )

// const formElement = document.querySelector('#regForm');
//
// // console.log(formElement.gender);
//
//
// // console.log(formElement.querySelectorAll('input, textarea, select, fieldset'));
//
// const loginEl = formElement.login
// const passwordEl = formElement.password
//
// console.log(loginEl.form)
// console.log(passwordEl.form)
// console.log(document.querySelector('#city').form);
// console.log(formElement.elements)

const formEl = document.querySelector("form");

// const loginInputEl = formEl.login
// const aboutTextEl = formEl.about
//
// // loginInputEl.value = "The Best Frontend Developer"
// // aboutTextEl.value = "The Best Of The Best"
//
// console.log(loginInputEl.value)
// console.log(aboutTextEl.value)

// const genderRadios = formEl.gender
//
// console.log(genderRadios);
// // genderRadios[1].checked = true;
// genderRadios.value = "Jenskiy"
// console.log(genderRadios.value);

// const agreementCE = formEl.agreement
//
// console.log(agreementCE.checked);

const citySE = formEl.city

// citySE.value = "Бандар-Сери-Бегаван"
citySE.options[3].selected = true;

console.log(citySE.value);

console.log(citySE.options[3].value)

console.log(citySE.selectedOptions);

const selectValue = [...citySE.selectedOptions]
   // .map(({value}) => value)
   // .join(", ")
   .reduce((acc, {value}, index) => {
      const separator = index > 0 ? ", " : ""

      return `${acc}${separator}${value}`
   }, "")


console.log(selectValue);


