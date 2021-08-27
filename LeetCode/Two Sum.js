// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const internalNums = [...nums];
    internalNums.sort((a, b) => {return a - b;});
    
    for (let i = 0; i < internalNums.length; i++) {
        const firstNumber = internalNums[i];
        const maxSecondNumber = target - firstNumber;
        
        for (let j = i + 1; j < internalNums.length; j++) {
            const secondNumber = internalNums[j];
            if (secondNumber > maxSecondNumber) {
                break;
            }
            
            if (secondNumber + firstNumber === target) {
                const firstIndex = nums.indexOf(firstNumber);
                const secondIndex = nums.lastIndexOf(secondNumber);
                
                return [firstIndex, secondIndex];
            }
        }
    }
};