type Mapping = { [key: string]: string }

const isValid = (s: string): boolean => {
    if (s.length < 2) return false
    
    const firstLetter = s[0]
    if (firstLetter === ')' || firstLetter === '}' || firstLetter === ']') return false
    
    const stack = []
    const mapping: Mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    stack.push(firstLetter);
    
    for (let i=1; i<s.length; i++) {
        const currentLetter = s[i]
        const validToAdd = (currentLetter === '(' || currentLetter === '{' || currentLetter === '[')
        if (validToAdd) {
            stack.push(currentLetter)
        } else {
            if (mapping[stack[stack.length -1]] === currentLetter) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    
    return stack.length ? false : true
};

console.log(isValid('()'))

/*
Case 1 - 
input: "()"
answer: true

Case 2 - 
input: "()[]{}"
answer: true

Case 3 - 
input: "(]"
answer: false

Case 4 -
input: "(("
answer: false
*/

