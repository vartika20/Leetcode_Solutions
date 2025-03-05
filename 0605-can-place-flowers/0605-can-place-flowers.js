/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    for(let i=0;i<flowerbed.length;i++){
        if(n===0) return true;
        if(flowerbed[i] === 0 && 
           (i === 0 || flowerbed[i-1] === 0) && 
          (i === flowerbed.length-1 || flowerbed[i+1] === 0)) {
            flowerbed[i] =1;
            n--;
        }
         if(n === 0) return true;
    }
  return false;  
};