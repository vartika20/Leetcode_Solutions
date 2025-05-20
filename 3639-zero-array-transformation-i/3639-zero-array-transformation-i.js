/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const diff = new Array(n+1).fill(0);

    for(let [l, r] of queries){
        diff[l]--;
        if(r+1<n) diff[r+1]++;
    }
    let sum =0;
    for(let i=0;i<n;i++){
        sum+=diff[i];
        if(nums[i] > -sum) return false;
    }
  return true;
};