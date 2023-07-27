
var twoSum = function(nums, target) {
    const map = {}
    for (let i=0; i<nums.length; i++) {
    
      if (map[ nums[i] ] !== undefined) {
         return [ map[nums[i]], i];
      }
    else   map[target-nums[i]] = i;
    
    }
};
console.log(twoSum([4,5,7,5,3],7));