/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if(nums.length % 2 !==0) return false;
    const map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
       map.set(nums[i],map.get(nums[i])+1)
        }
        else {map.set(nums[i],1);}
    }
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
           if( map.get(nums[i])%2 !== 0) return false; 
        }
    }
    return true;
};