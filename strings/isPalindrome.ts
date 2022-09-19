function isPalindrome(s: string): boolean {
    if (!s) return true; //empty string
    
    let i: number = 0;
    let j: number = s.length-1;
    let lastCase: boolean = false;
    
    while (i!==j && !lastCase) { //for strings more than empty
        console.log(`${i}, ${j}`);
        
        while (!(/^[a-z0-9]+$/i).test(s.charAt(i)) && i < s.length) {  i++; }
        while (!(/^[a-z0-9]+$/i).test(s.charAt(j)) && j > 0) { j--; }

        if (i === j || i === s.length && j === 0) return true;

        if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) {
            return false;
        }

        i++;
        j--; 
        lastCase = (j-i < 1); 
    }
    
    return true;
};


const isPalindrome2 = (input: string) => {
    if (!input) return true

    const sanitizeInput = Array.from(input).filter(character => character.match(/^[a-z0-9]+$/i)) //alphanumeric!
    const isOdd = sanitizeInput.length % 2 !== 0

    let firstHalf = sanitizeInput.slice(0, sanitizeInput.length/2)
    let secondHalf = sanitizeInput.slice(isOdd ? sanitizeInput.length/2 + 1 : sanitizeInput.length/2, sanitizeInput.length)

    return firstHalf.toString().toLowerCase().split(',').join() === secondHalf.reverse().toString().toLowerCase().split(',').join()
}

console.log(isPalindrome('ab2a'));

/*
Case 1 - Note: assumes empty is palindrome
input: ''
answer: true

Case 2 - 
input: "A man, a plan, a canal: Panama"
answer: true

Case 3 - 
input: "race a car"
answer: false

Case 4 -
input: "a."
answer: true

Case 5 -
input: ".,"
answer: true

Case 6 - 
input: "aa"
answer: true

Case 7 - 
input: "ab2a"
answer: true

Case 8 - 
input: "0P"
answer: false
*/