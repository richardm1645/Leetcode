/*
In Square Code, the spaces are removed from the english text and the characters are written into a square (or rectangle).

Example: "If man was meant to stay on the ground god would have given us roots" - 54 characters long, once the spaces are removed, so it is written into a rectangle with 7 rows and 8 columns.

ifmanwas
meanttos
tayonthe
groundgo
dwouldha
vegivenu
sroots

The square root of 54 (Math.sqrt(54)) is 7.3484692283495345. If we round this number up (Math.ceil(Math.sqrt(54))), we get 8. 
If we use that for the number of characters on each line (the number of columns), then our text will be close to a square shape.

The message is then coded by reading down the columns going left to right. For example, the message above is coded as:

Output: imtgvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/

const squareCode = function(message) {
  const joinedStr = message.replace(/\s+/g, '');
  const numOfChar = Math.ceil(Math.sqrt(joinedStr.length))
  let squaredStr = '';
  let codedStr = '';

  //converts the joined string into a square shape
  for (i = 0; i < joinedStr.length; i++) {
    if (i > 0 && i % numOfChar === 0) { 
      squaredStr += " ";
    }
    squaredStr += joinedStr.charAt(i);
  }

  //Create an array of all the blocks in the square
  const squaredArray = squaredStr.split(" ");

  for (let j = 0; j < squaredArray[0].length; j++) {
    for (let k = 0; k < squaredArray.length; k++) {
      if (squaredArray[0].length % codedStr.length === 0) { 
        codedStr += " ";
      }
      codedStr += squaredArray[k].charAt(j);
    }
  }
  return codedStr.trim();
};

console.log(squareCode("chill out"));
// console.log(squareCode("feed the dog"));
// console.log(squareCode("have a nice day"));
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
