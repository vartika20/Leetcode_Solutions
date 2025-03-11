/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowel = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
    let i=0,j=s.length-1;
    const res = [...s]
    while(i<j){
        if(vowel.has(res[i]) && vowel.has(res[j])){
           [res[i],res[j]] = [res[j],res[i]]
            i++;
            j--;

        }
        else if(!vowel.has(res[i])) i++;
        else j--;
    }
    return res.join('')

};