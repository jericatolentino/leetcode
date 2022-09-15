const reverseEachWord = (value: string): string => {
    const words: string[] = value.split(' ');

    const reverse = (word): string => {
        return word.split('').reverse().join('');
    }

    let newSentence: string = reverse(words[0]);

    words.slice(1).map(word => {
        newSentence = newSentence + ` ${reverse(word)}`;
    });

    return newSentence;
}

console.log(reverseEachWord('Welcome to this Javascript Guide!'));
//emocleW ot siht tpircsavaJ !ediuG

