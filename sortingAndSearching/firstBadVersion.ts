
const solution = (isBadVersion: any) => {
    return (n: number): number => {
        let left = 1;
        let right = n;
        let middle;
        let pointer = 1;
        
        while (left <= right) { // stop until we converge to one element, i.e. will be equal or more
            middle = Math.floor((left+right)/2) 
            if (isBadVersion(middle)) {
                pointer = middle
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
        return pointer
    };
};


/*
Case 1 -
input: 1,1
answer: 1

Case 2 -
input: 5,4
answer: 4

Case 3 -
input: 2,1
answer: 1

Case 4 -
input: 3,2
answer: 2

Case 4 -
input: 4,4
answer: 4
*/