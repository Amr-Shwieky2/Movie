/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    //cắt chuỗi thành mảng
    const arr = s.split('');
    // khởi tạo đối tượng set
    const unique = new Set(arr);
    for (let value of unique) {
        if((s.split(value).length) != (t.split(value).length)){
            return false;
        }   
    }
   return true;  
};
console.log(isAnagram("car","rac")); 