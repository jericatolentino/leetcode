
const plusOne = (input: number[]) => {
    const inputAsNumberPlusOne = BigInt(input.join('')) + 1n // same as BigInt(...) + BigInt(1)
    return Array.from((inputAsNumberPlusOne.toString()), element => parseInt(element))
}

console.log('plusOne', plusOne([1,2,3])) // [1,2,4]
console.log('plusOne', plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

/*s
Case 1 -
input: [1,1,3]
answer: [1,2,4]

Case 2 -
input: [4,3,2,1]
answer: [4,3,2,2]

Case 3 -
input: [9]
answer: [1,0]

Note: JS rounds any number higher than 16 digits/ MAX_SAFE_INTEGER

Case 4 -
input: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
answer: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

Tip: use BigInt and wrapper and add (number)'n', convert back to string, create arr`ay and parse each value
*/