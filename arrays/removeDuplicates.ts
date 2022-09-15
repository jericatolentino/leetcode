function removeDuplicates(nums: number[]): number {
    let i: number = 1;
    while (i < nums.length) {
        nums[i-1] === nums[i] ? nums.splice(i, 1) : i++;
    }
    return nums.length;
}; 
//console.log(`nums[i-1]:${nums[i-1]} nums[i]:${nums[i]}`);

console.log(removeDuplicates([1,1,2]));
/*
Case 1 -
input: [1,1,2]
expected array: [1,2]
answer: 2

Case 2 -
input: [0,0,1,1,1,2,2,3,3,4]
expected array: [0,1,2,3,4]
answer: 5
*/