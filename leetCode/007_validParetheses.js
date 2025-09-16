// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stak = [s[0]]
    for (let i = 1; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[' ) {
            stak.push(s[i])
        }
        else if (stak[stak.length-1] == '(' && s[i] == ')') {
            stak.pop()
        }
        else if (stak[stak.length-1] == '{' && s[i] == '}') {
            stak.pop()
        }
        else if (stak[stak.length-1] == '[' && s[i] == ']') {
            stak.pop()
        }
        else if (s[i] == ')' || s[i] == '}' || s[i] == ']' ) {
            stak.push(s[i])
        }
    }
    return stak.length==0


};

console.log (isValid("([])"))
console.log (isValid("()[]{}"))
console.log (isValid("([)]"))
console.log (isValid("(])"))

// BEST SOLUTION


// var isValid = function(s) {
//     let stack = []
//     let map = {
//         '}':'{',
//         ']':'[',
//         ')':'('
//     }

//     for(let i = 0 ; i < s.length;i++){
//         if(s[i] == '(' ||s[i] == '{' ||s[i] == '[' ){
//             stack.push(s[i])
//         }else{
//             if(stack[stack.length-1] != map[s[i]]){
//                 return false
//             }
//             stack.pop()
//         }
//     }

//     return stack.length == 0
// };