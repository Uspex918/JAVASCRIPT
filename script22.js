// const wait = (ms, callback) => {
//    setTimeout(callback, ms)
//    // const now = new Date().getTime();
//    //
//    // while (new Date().getTime() < now + ms) {}
//    //
//    // callback();
// }
//
// console.log(1)
// wait(1000, () => console.log(2));
// console.log(3)

// console.log("Start the program")
//
//
// setTimeout(() => {
//    console.log("Async task had been done")
// }, 2000)
//
//
// console.log("Finish the program")

// const makeRequest = (url, onSuccess) => {
//
// }
//
// const sellerId = 154
//
// makeRequest(`v1/sellers/${sellerId}`, (seller) => {
//    const firstProductId = seller.productId[0]
//
//    makeRequest(`v1/sellers/${firstProductId}`, (product) => {
//       const firstReviewId = product.reviewsIds[0]
//
//       makeRequest(`v1/sellers/${firstReviewId}`, (review) => {
//             const authorName = review.author.name
//       })
//    })
// })

// const promise = new Promise((fulfill, reject) => {
//    console.log("Начало, состояние pending...")
//
//    setTimeout(() => {
//       const some = Math.random()
//       console.log(some)
//
//       if (some > 0.5) {
//          fulfill("Ура");
//       } else {
//          reject("Отклонено");
//       }
//    }, 2000)
// })
//
// promise
//    .then((successData) => {
//       console.log("Uspex!!!", successData);
//    })
//    .catch((error) => {
//       console.log("Fuck", error);
//    })

async function main() {
   // return "Hello World!";
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(true)
      }, 3000)
   })
}

// main()
// .then((result) => {
//    console.log(result);
// })
console.log("Start")
const mainConst = await main()
console.log(mainConst)
console.log("Finish")

