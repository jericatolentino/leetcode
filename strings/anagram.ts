const anagram = (wA: string, wB: string): boolean => {
    if (!wA && !wB) return true; //both empty

    let trackA: { [key: string]: number } = {};
    let trackB: { [key: string]: number } = {};
    
    const pattern = (/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g); //'\s' removes whitespace
    let wordA = wA.toLowerCase().replace(pattern, "");
    let wordB = wB.toLowerCase().replace(pattern, "");

    let higher: number;
    let lower: number;
    let finishTrack: { [key: string]: number };
    let finishWord: string;

    if (wordA.length > wordB.length) {
        higher = wordA.length;
        lower = wordB.length;
        finishTrack = trackA;
        finishWord = wordA;
    } else {
        higher = wordB.length;
        lower = wordA.length;
        finishTrack = trackB;
        finishWord = wordB;
    }

    for (let i = 0; i < lower; i++) {
        trackA[wordA.charAt(i)] = (trackA[wordA.charAt(i)] || 0) + 1;
        trackB[wordB.charAt(i)] = (trackB[wordB.charAt(i)] || 0) + 1;
    }

    const difference: number = higher - lower;
    
    for (let i = 0; i < difference; i++) {
        const index = finishWord.charAt(lower++);
        finishTrack[index] = (finishTrack[index] || 0) + 1;
    }

    const keysA: string[] = Object.keys(trackA);
    const keysB: string[] = Object.keys(trackB);
    
    if (keysA.length !== keysB.length) return false;

    Object.keys(keysA).map((k) => {
        if (keysA[k] !== keysB[k]) return false; 
    });

    return true;
}

const generateLetterAmountMap = (word: string) => {
    const wordMap: { [key: string]: number } = {}

    for (let i = 0; i < word.length; i++) {
        const currentLetter = word.charAt(i)
        const mappedLetter = wordMap[currentLetter]
        wordMap[currentLetter] = mappedLetter ? mappedLetter + 1 : 1
    }

    return wordMap
}

const isAnagram2 = (wordA: string, wordB: string) => {
    if (wordA.length !== wordB.length) return false

    const wordAMap = generateLetterAmountMap(wordA)
    const wordBMap = generateLetterAmountMap(wordB)

    for (let key of Object.keys(wordBMap)) {
        if (wordAMap[key] === wordBMap[key]) {
            delete wordAMap[key]
        }
    }

    return Object.keys(wordAMap).length === 0
}


console.log(anagram('finder', 'Friend'));

/*
Check if two strings are anagams
Note: case insensitive, don't consider spaces/punctuation

anagram('finder', 'Friend')  --> true
anagram('Friend', 'finde % R') --> true
anagram('Friend', 'fF  $%inderrRrtt') --> false
*/

/*
line 19 - 
create index initialise with 0 or use current, then +1
equivalent to trackA[wordA.charAt(i)] = trackA[wordA.charAt(i)] !== undefined ? trackA[wordA.charAt(i)]+1 : 1;
Note: ++ incr doesn't work for object properties/values, only arrays
*/