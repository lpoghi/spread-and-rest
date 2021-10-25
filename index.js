function sum (...numbers) {
     return numbers.reduce((prev, current) => prev + current)
}

console.log(sum(1,25,4))


function sum2 (a, b) {
    return a + b
}

console.log(sum2(1,4))

let nums = [4,8,7,8]

console.log(sum(...nums))