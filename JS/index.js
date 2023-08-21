/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = new Set (nums); 
    return res; 
};
console.log(removeDuplicates([0,0,1,1,1,2,2,3,4])); 