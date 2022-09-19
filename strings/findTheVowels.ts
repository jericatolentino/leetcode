const findTheVowels = (value: string) => {
    if (!value) return 0;

    let count: number = 0;

    for (let i=0; i<value.length; i++) {
        if ((/[aeiou]/i).test(value.charAt(i))) count++; //i ignores case
    }
    
    return count;
}

const findTheVowels2 = (input: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    let count = 0

    for (let letter of input) {
        if (vowels.includes(letter.toLowerCase())) count++
    }

    return count
}

console.log(findTheVowels("hellO"));
console.log(findTheVowels("WhY"));

/*
Return number of vowels contained in string

findTheVowels('hello') -> 2
*/