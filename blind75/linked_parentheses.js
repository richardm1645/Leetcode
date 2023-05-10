/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

*/

/**
 * @param {string} s
 * @return {boolean}
 */

/*
const isValid = function(s) {
  for (let i = 0; i < s.length; i += 2) {
    if (s.charAt(i) === '(') {
      if (s.charAt(i + 1) !== ')') {
        return false;
      }
      
    } else if (s.charAt(i) === '[') {
      if (s.charAt(i + 1) !== ']') {
        return false;
      }

    } else if (s.charAt(i) === '{') {
      if (s.charAt(i + 1) !== '}') {
        return false;
      }
    }
  }
  return true;
};
*/


//Better solution - Uses stacks to check
var isValid = function(s) {
  // Initialize stack to store the closing brackets expected...
  let stack = [];
  // Traverse each charater in input string...
  for (let idx = 0; idx < s.length; idx++) {
      // If open parentheses are present, push it to stack...
      if (s[idx] == '{') {
          stack.push('}');
      } else if (s[idx] == '[') {
          stack.push(']');
      } else if (s[idx] == '(') {
          stack.push(')');
      }
      // If a close bracket is found, check that it matches the last stored open bracket
      else if (stack.pop() !== s[idx]) {
          return false;
      }
  }
  //If everything matches, array will be empty, meaning !0 will equate to true
  return !stack.length;
};


console.log(isValid(("()"))) //Output: true
console.log(isValid(("[]{}"))) //Output: true
console.log(isValid(("(}"))) //Output: false