// const arr = ["Hi", 100, true, {name: "Bob"}, () => console.log("Haha"), [true, false]];
//
// console.log(arr[3]["name"])
// arr[4]()
//
// arr[1] = 600
//
// console.log(arr)


// const arr = ["hello", 5]
//
// arr[2] = 5
// arr[100] = 100
//
//
// console.log(arr.length - 1)
// console.log(arr.at(0))
//
// arr.push("push"," push2")
// arr.unshift("unshift")
//
// console.log(arr)
//
// arr.pop()
// arr.shift()
// console.log(arr)
//
// const f = arr.join(", ")
// console.log(f)
// console.log(arr)

// const message = "Это очень интересный случай"
// console.log(message.split(" ").join(" "))

// const arr1 = [1,2,3]
// const arr2 = arr1.slice()
//
// arr2[0] = "0"


const arr1 = ["hi", 5, false, [1]]
const arr2 = ["hi", 5, false, [1]]

const areArraysEqual = (array1, array2) => {
    if (array1.length !== array2.length) {
        return false
    }

    for (let i = 0; i < array1.length; i++) {
        const value1 = array1[i]
        const value2 = array2[i]

        const areValuesArrays = Array.isArray(value1) && Array.isArray(value2)

        if (areValuesArrays) {
            if (!areArraysEqual(value1, value2)) {
                return false
            }
            continue
        }

        if (value1 !== value2) {
            return false
        }
    }
    return true
}

console.log(areArraysEqual(arr1, arr2))