/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity, sec = Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]> first && nums[i]> sec) return true;
        if(nums[i]> first) sec = nums[i];
        else first = nums[i];
    }
    return false;
};