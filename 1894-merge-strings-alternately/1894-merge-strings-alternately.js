/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    let res = ''
    let l = n>m ? n : m;
   for(let i=0;i<l;i++){
    if(i===n && i!== m) res+=(word1.slice(i))
    else if(i===m && i!== n) res+=(word2.slice(i))
       res+=(word1.charAt(i))
       res+=(word2.charAt(i));  
   }
   return res;
};