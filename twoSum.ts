
const twoSum = (nums: number[], target: number): number[] => {
    if (nums.length === 2) return [0, 1]
    
    let map = {}
    
    nums.forEach((element, index) => {
        map[element] = [...map[element] ? map[element] : [], index]
    })

    const findValue = Object.keys(map).find(key => map[target - parseInt(key)])
    if (findValue) {
        if (map[target - parseInt(findValue)].length > 1) {
            return [map[findValue][0], map[findValue][1]]
        } else {
            return [map[findValue][0], map[target - parseInt(findValue)][0]]
        }
    }
    
    return []
   
};

console.log(twoSum([2,7,11,15], 9)) // [2,7]

/*
Case 1 -
input: [3,2,4], target = 6
answer: [2,4]
*/