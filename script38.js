const formElement = document.querySelector('form');

formElement.addEventListener('submit', (e) => {
   e.preventDefault();

   const formData = new FormData(formElement);

   formData.append('email', "mili@gmail.com");


   console.log(Object.fromEntries(formData));

   console.log(formData.get('agreement'));
   console.log(formData.has('agreement'));
   // formData.delete('agreement')


   // formData.forEach((value, name) => {
   //    console.log(`${name}: ${value}`);
   // })

   // for (const element of formElement.elements) {
   //    if (!element.name) {
   //       continue;
   //    }
   //
   //    if (element.type === 'checkbox') {
   //       formData[element.name] = element.checked;
   //       continue;
   //    }
   //
   //    if (element.type === 'radio' && !element.checked) {
   //       continue;
   //    }
   //
   //    formData[element.name] = element.value;
   // }
   // console.log(formData);
})

