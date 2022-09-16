

const firstUniqueCharacter = (s: string) => {
    if (s.length === 1) return 0;
    
    let nonRepeatingChars = new Set();
    let repeatingChars = new Set();
    
    for (let i=0; i<s.length; i++) {
        const currentValue = s[i]
        !nonRepeatingChars.has(currentValue) ? nonRepeatingChars.add(currentValue) : repeatingChars.add(currentValue) 
    }
    
    for (let i=0; i<s.length; i++) {
        if (!repeatingChars.has(s[i])) return i
    }
    return -1
}

const firstUniqueCharacter2 = (s: string) => {
    const mapOccurences: { [key: string]: [number, number] } = {} // letter: [first index, value]

    Array.from(s).forEach((letter, index) => {
        const existingLetter = mapOccurences[letter]
        mapOccurences[letter] = existingLetter ? [existingLetter[0], existingLetter[1] + 1] : [index, 1]
    })

    const getUniqueIndexValue = Object.entries(mapOccurences).find(([letter, [index, value]]) => {
        return value === 1
    })
    return getUniqueIndexValue ? getUniqueIndexValue[1][0] : -1
}


console.log('firstUniqueCharacter', firstUniqueCharacter('leetcode'))
console.log('firstUniqueCharacter', firstUniqueCharacter('loveleetcode'))
console.log('firstUniqueCharacter', firstUniqueCharacter('aabb'))