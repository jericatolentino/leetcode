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
*/