
const moveZeroes = (input: number[]) => {
    let countZeros = 0
    let counter = 0
    while (counter < input.length) {
        if (input[counter] === 0) {
            countZeros++;
            input.splice(counter, 1)
        } else {
            counter++
        }
    }

    input.push(...Array.from({ length: countZeros }, () => 0))
}

console.log(`moveZeroes`, moveZeroes([0, 1, 0, 3, 12]))

/*
Case 1 -
input: [0,1,0,3,12]
expected array: [1,3,12,0,0]

Case 2 -
input: [0]
expected array: [0]

Note: do not use concat as it does not modify in place (returns new array)

Case 3 -
input: [0,0,1]
expected array: [1,0,0]

*/