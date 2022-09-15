

const containsDuplicate = (input: number[]) => {
    const mapCount: { [key: number]: number } = {}

    for (let i = 0; i < input.length; i++) {
        const currentValue = input[i]
        if (mapCount[currentValue]) {
            return true
        }
        mapCount[currentValue] = 1
    }

    return false
}


console.log('containsDuplicate', containsDuplicate([1, 2, 3, 1]))

/*
Case 1 -
input: [1, 2, 3, 1]
answer: true

Case 2 -
input: [1, 2, 3, 4]
answer: false

Case 3 - 
input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
answer: true

Note: cannot break from for-each, use for loop
*/