
const intersect = (nums1: number[], nums2: number[]): number[] => {
    let selected = nums1
    let nonSelected = nums2
    if (nums1.length > nums2.length) {
        selected = nums2
        nonSelected = nums1
    }
    
   return nonSelected.filter(element => {
       const findIndex = selected.indexOf(element)
       if (findIndex < 0) {
           return false
       } else {
           selected.splice(findIndex, 1)
           return true
       }
   })
};

console.log(intersect([4,9,5], [9,4,9,8,4]))

/*
Case 1 - 
input: [4,9,5], [9,4,9,8,4]
answer: [4,9] or [9,4]

Case 2 - 
input: [1], [1,2]
answer: [1]

Case 3 - 
input: [1,2,2,1], [2,2]
answer: [2,2]
*/

