// let password = ""
//
// while (password.length < 8) {
//     password = prompt("Enter your password")
// }
//
// console.log("Password: " + password)


// let count = 0
//
// while (count <= 5) {
//     console.log(count)
//     count++
// }



let count = 1

while (count <= 150) {
    if (count % 10 === 0) {
        count++

        continue
    }
    console.log("Age " + count)

    if (count % 10 === 0) {
        console.log("Cikl prervan")
        // break
    }



    count++
}

