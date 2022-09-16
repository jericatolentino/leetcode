
const validAnagram = (s: string, t: string) => {
    if (s.length !== t.length) return false

    const createMap = (input: string) => Array.from(input).reduce((accum: { [key: string]: number }, curr: string) => {
        const currentLetter = accum[curr]
        return {
            ...accum,
            [curr]: currentLetter ? currentLetter + 1 : 1
        }
    }, {})

    const sLetterMap = createMap(s)
    const tLetterMap = createMap(t)

    Object.entries(sLetterMap).forEach(([letter, number]) => {
        if (tLetterMap[letter] === number) delete tLetterMap[letter]
    })

    return !Object.keys(tLetterMap).length 
}

const validAnagram2 = (s: string, t: string) => {
    if (s.length !== t.length) return false

    if (Array.from(s).sort().join() === Array.from(t).sort().join()) return true
    return false
}

console.log('validAnagram', validAnagram("anagram", "nagaram"));
console.log('validAnagram', validAnagram("rat", "car"));
console.log('validAnagram', validAnagram("tail", "liat"));

console.log('validAnagram', validAnagram2("anagram", "nagaram"));
console.log('validAnagram', validAnagram2("rat", "car"));
console.log('validAnagram', validAnagram2("tail", "liat"));