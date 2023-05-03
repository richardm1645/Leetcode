/*
Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

    1. camel, pascal, snake, kebab, title
    2. vowel, consonant
    3. upper, lower

    Examples:
    console.log(makeCase("this is a string", "camel"));  ---> thisIsAString
    console.log(makeCase("this is a string", "pascal")); ---> ThisIsAString
    console.log(makeCase("this is a string", "snake"));  ---> this_is_a_string
    console.log(makeCase("this is a string", "kebab"));  ---> this-is-a-string
    console.log(makeCase("this is a string", "title"));  ---> This Is A String
    console.log(makeCase("this is a string", "vowel"));  ---> thIs Is A strIng
    console.log(makeCase("this is a string", "consonant")); ---> THiS iS a STRiNG
    console.log(makeCase("this is a string", ["upper", "snake"])); ---> THIS_IS_A_STRING
*/

const makeCase = function(string, format) {
  const numOfProcesses = Array.isArray(format) ? format.length : 1; //Checks if the requested format is an array.

  for(let i = 0; i < numOfProcesses; i++) {

    //camel case
    if(format === 'camel' || format.includes('camel')) {

      //splits str per word, capitalizes the first letter of each word after the first index, the rejoins the array
      let splitStr = string.split(" ").map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
      string = splitStr;
    } 
    
    //pascal case
    if(format === 'pascal' || format.includes('pascal')) {

      //splits str per word, capitalizes the first letter of each word after the first index, the rejoins the array
      let splitStr = string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
      string = splitStr;
    }

    //snake case
    if(format === 'snake' || format.includes('snake')) {

      //Replaces every whitespace with an underscore
      let splitStr = string.replace(/\s+/g, '_').toLowerCase();
      string = splitStr;
    }

    //kebab case
    if(format === 'kebab' || format.includes('kebab')) {

      //Replaces every whitespace with a hyphen
      let splitStr = string.replace(/\s+/g, '-').toLowerCase();
      string = splitStr;
    }

    //title case
    else if(format === 'title' || format.includes('title')) {

      //splits str per word, capitalizes the first letter of each word
      let splitStr = string.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      string = splitStr;
    }

    //vowel case - Capitalize every vowel
    if(format === 'vowel' || format.includes('vowel')) {

      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let splitStr = string.split("").map((letter) => vowels.includes(letter) ? letter.toUpperCase() : letter).join("");
      string = splitStr;
    }

    //consonant case - Capitalize every consonant
    if(format === 'consonant' || format.includes('consonant')) {

      const vowels = ['a', 'e', 'i', 'o', 'u'];
      let splitStr = string.split("").map((letter) => vowels.includes(letter) ? letter : letter.toUpperCase()).join("");
      string = splitStr;
    }

    //Uppercase
    if(format === 'upper' || format.includes('upper')) {

      let splitStr = string.toUpperCase();
      string = splitStr;
    }

    //Lowercase
    if(format === 'lower' || format.includes('lower')) {

      let splitStr = string.toLowerCase();
      string = splitStr;
    }
  }
  return string;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));