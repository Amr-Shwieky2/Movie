/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str =s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let arr = str.split(""); 
    let arr1=[...arr].reverse();  
    return JSON.stringify(arr) === JSON.stringify(arr1); 
};
const str =" ";
console.log(isPalindrome(str)); 
