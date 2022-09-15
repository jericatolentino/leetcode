function fizzBuzz(n: number): string[] {
    //multiple 3 - Fizz, multiple 5 - Buzz, both - FizzBuzz
    let list: string[] = []; 
    let j: number;
    
    for (let i=1; i<=n; i++) {
        j = i-1;
        if (i%3 == 0 && i%5 == 0) {
            list[j] = "FizzBuzz";
        } else if (i%3 == 0) {
            list[j] = "Fizz";
        } else if (i%5 == 0) {
            list[j] = "Buzz";
        } else {
            list[j] = i.toString();
        }
    }
    
    return list;

};

function fizzBuzz2(n: number): string[] {
    //better answer fif more divisors added
    let list: string[] = []; 
    let word: string;
    
    for (let i=1; i<=n; i++) {
        word = '';
        if (i%3 == 0) word += 'Fizz';
        if (i%5 == 0) word += 'Buzz';
        list[i-1] = word ? word : i.toString();
    }
    
    return list;

};

console.log(`fizzBuzz: ${fizzBuzz(15)}\nfizzBuzz2: ${fizzBuzz2(15)}`);

/*
Case 1 -
input: 15
answer: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/