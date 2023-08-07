/**
* @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let answer=""; 
    let temp="";
    // if(strs.length === 1 ) return temp ; 
    for(let j=0;j<strs[0].length;j++){
        temp+=strs[0][j]; 
        for(let i=1;i<strs.length;i++){
            if(strs[i][j] !== strs[0][j]){
                return answer; 
            }
        }
        answer=temp; 
    }  
    return answer; 
  
    }

    console.log(longestCommonPrefix(["a"])); 