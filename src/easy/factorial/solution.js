function numFactorial(number) {
    let numCollect = []
    for (let i = 1; i <= number; i++) {
        numCollect.push(i)
    }
    let result = 1
    for (let j = 0; j < numCollect.length; j++) {
        result = result * numCollect[j]
    }

    return result
}

console.log(numFactorial(4))
