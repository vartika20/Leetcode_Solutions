/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = [];
    const max = Math.max(...candies);
    for(let i=0; i<candies.length;i++){
        if(candies[i]+extraCandies < max) res.push(false);
        else res.push(true);
    }
    return res;
};