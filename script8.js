function hello() {
    const message = "Hello World!"

    console.log("Hello ")

    return message
}
hello()

const number = 0
{
    const number1 = 1
    console.log(number1)
    {
        const number2 = 2
        console.log(number2)
        {
            const number3 = 3
            console.log(number3)
            {

            }

        }

    }
}
console.log(number)

function logMessage(message = "Привет!", count) {
    for (let i = 0; i < count; i++) {
        console.log(message + "d")
    }
}

logMessage("f", 1)

function sum(a, b) {
    return a + b;
}

const result = sum(100,1);
console.log(result);

