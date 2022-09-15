/*
Task - return nth entry (e.g. fibonacci(3) -> 2)

sequence where sum of preceding two
First 10 numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

function fibonacci (value: number) {
    let sequence: number[] = [0, 1];
    
    for (let i = 1; i < value; i++) {
        sequence[i+1] = sequence[i-1] + sequence[i];
    }

    return sequence[value];
}

console.log(fibonacci(3));

function recursiveFibonacci (value: number) {
    if (value < 2) {
        return value;
    }

    return fibonacci(value-2) + fibonacci(value-1);
}

console.log(recursiveFibonacci(7));