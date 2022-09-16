
const reverseInteger = (input: number) => {
    const reverseInput = Array.from(Math.abs(input).toString()).reverse()
    const formatInput = parseInt(reverseInput.toString().split(',').join(''))

    let reversedInteger = formatInput

    // if negative add sign back
    if (Math.sign(input) === -1) reversedInteger = -formatInput

    // return 0 if reversed is outside 32-bit range
    const endRange = Math.pow(2, 31) - 1
    if (reversedInteger > endRange || reversedInteger < -endRange) return 0
    return reversedInteger
}

console.log('reverseInteger', reverseInteger(123)) //321
console.log('reverseInteger', reverseInteger(-123)) //-321
console.log('reverseInteger', reverseInteger(120)) //21
console.log('reverseInteger', reverseInteger(0))  