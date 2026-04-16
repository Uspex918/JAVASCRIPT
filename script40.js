

const loadPostFormElement = document.querySelector(".load-post-form")
const resultElement = document.querySelector(".result")
const postIdInputElement = document.querySelector("#post-id")

loadPostFormElement.addEventListener("submit", (e) => {
   e.preventDefault()

   fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
      .then((response) => {
         console.log(response)

         if (!response.ok) {
            const errorMessage = response.status === 404
               ? `пост не найден, код ошибки ${response.status}`
               : "что-то пошло не так"
            throw new Error(errorMessage)
         }

         return response.json()

      })
      .then((json) => {
         console.log(json)
         //
         // const {id, title, completed} = json
         //
         // resultElement.innerHTML = `
         // <input
         //    id="todo-${id}"
         //    type="checkbox"
         //    ${completed ? 'checked' : ''}
         // />
         //
         // <label for="todo-${id}">${title}</label>
         // `

         const {title, views, text, name, postId, id} = json

         resultElement.innerHTML = `
            <p>${title}, просмотров: ${views}</p>
         `

      })
      .catch((error) => {

         resultElement.innerHTML = error.message
      })
})


const createPostFormElement = document.querySelector(".create-post-form")

createPostFormElement.addEventListener("submit", (e) => {
   e.preventDefault()

   const formData = new FormData(createPostFormElement)
   // console.log([...formData.entries()])
   const formDataObject = Object.fromEntries(formData)
   // console.log(formDataObject)

   fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
         ...formDataObject,
         postNumber: formDataObject.id,
         views: 0,
      }),
      headers: {
         "Content-Type": "application/json",
      },
      // credentials: "include",
   }).then((response) => {
      console.log(response)
      return response.json()
   }).then((json) => {
      console.log(json)
   })
   .catch((error) => {
      resultElement.innerHTML = error.message
   })
})

const searchPostFormElement = document.querySelector(".search-posts-form")
const postViewsInputElement = document.querySelector("#post-views")

searchPostFormElement.addEventListener("submit", (e) => {
   e.preventDefault()

   fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElement.value}`)
   .then((response) => response.json())
   .then((json) => {
      console.log(json)

      resultElement.innerHTML = json
         .map(({title, views}) => `<p>${title} просмотров: ${views}</p>`)
         .join("")
   })


})


// npx json-server db.json5