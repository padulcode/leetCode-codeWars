// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // if(strs.length == 1){return String(strs)}
    // let result = ''
    // let i =0
    // while(strs[0][i] == strs[1][i] && strs[0][i] == strs[2][i]){
    //     result += strs[0][i]
    //     i++
    // }
    // return result
    let result = ''
    for (let i = 0; i < strs[0].length; i++) {
        let temp = strs[0][i]
        let count = 0
        for (let j = 0; j < strs.length; j++) {
            if(strs[j][i] == temp){
                count ++
            }
        }
        if (count == strs.length) {
            result += temp
        }
        else
        break
    }
    return result
};
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["cir","car"]))
// console.log(longestCommonPrefix(["a"]))
// console.log(longestCommonPrefix(["",""]))


// BEST SOLUTION :
// var longestCommonPrefix = function(strs) {
//     if(!strs && strs.length == 0) return ""
    
//     strs.sort()
//     let firstStr = strs[0]
//     let lastStr = strs[strs.length - 1]
//     let i = 0
//     while(i < firstStr.length &&firstStr[i] == lastStr[i]){
//         i++
//     }
//     return firstStr.substring(0,i)
// };