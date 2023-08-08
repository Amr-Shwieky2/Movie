/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map={
    "(" : 1, 
    ")": -1, 
    "[": 2, 
    "]":-2,
    "{":3, 
    "}":-3
    }
    if(s.length === 1)return false; 
    let count=0; 
    while(s.length !== 0 ){
        if(map[s[count]] < 0){
            if(map[s[count]] + map[s[count-1]] !== 0 )
            return false;
            else {
                s=s.slice(0,count-1)+s.slice(count+1,s.length); 
                count=0; 
            }
        }
        if(count === s.length-1) return false; 
        count++; 
    }
    return true; 

    }
console.log(isValid("[{(){}}]"));

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
