
class FormsValidation {
   selectors = {
      form: "[data-js-form]",
      fieldErrors: "[data-js-form-field-errors]",
   }

   errorMessages = {
      valueMissing: () => 'Вы пропустили заполнение этого поля',
      patternMismatch: ({title}) => title || 'Данные не соответствуют формату',
      tooShort: ({minLength}) => `Слишком короткое значение, минимум символов - ${minLength}`,
      tooLong: ({maxLength}) => `Слишком длинное значение, ограничение символов - ${maxLength}`,
   }

   constructor() {
      this.bindEvents()
   }

   manageErrors(fieldControlElement, errorMessages) {
      const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)

      fieldErrorsElement.innerHTML = errorMessages.map((message) => `<span class="field__error">${message}</span>`).join("")
   }

   validateField(fieldControlElement) {
      const errors = fieldControlElement.validity
      const errorMessages = []

      Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
         if (errors[errorType]) {
            errorMessages.push(getErrorMessage(fieldControlElement))
         }
      })
      this.manageErrors(fieldControlElement, errorMessages)

      const isValid = errorMessages.length === 0

      fieldControlElement.ariaInvalid = !isValid

      return isValid
   }

   onBlur(event) {
      const {target} = event
      const isFormField = target.closest(this.selectors.form)
      const isRequired = target.required

      if (isFormField && isRequired) {
         this.validateField(target)
      }
   }

   onChange(e) {
      const {target} = e
      const isRequired = target.required
      const isToggleType = ['radio', 'checkbox'].includes(target.type)

      if (isRequired && isToggleType) {
         this.validateField(target)
      }
   }

   onSubmit(e) {
      const isFormElement = e.target.matches(this.selectors.form)

      if (!isFormElement) {
         return
      }

      const requiredControlElements = [...e.target.elements].filter(({required}) => required)
      let isFormValid = true
      let firstInvalidFieldControl = null

      requiredControlElements.forEach((el) => {
         const isFieldValid = this.validateField(el)

         if (!isFieldValid) {
            isFormValid = false

            if (!firstInvalidFieldControl) {
               firstInvalidFieldControl = el
            }
         }

         if (!isFormValid) {
            e.preventDefault()
            firstInvalidFieldControl.focus()
         }
      })
   }

   bindEvents() {
      document.addEventListener('blur', (e) => {
         this.onBlur(e)
      }, {capture: true})
      document.addEventListener('change', (e) => {this.onChange(e)})
      document.addEventListener('submit', (e) => {this.onSubmit(e)})
   }
}

new FormsValidation();