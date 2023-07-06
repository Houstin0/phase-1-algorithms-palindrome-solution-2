 function isPalindrome(word) {
    // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }

  return true;
}

/* 
  Add your pseudocode here
  //convert word string to lowercas and remove spaces and store in words variable
//reverse the string
//check if the original string and reversed string are equal
//return true if they are equalor false otherwise
*/

/*
  Add written explanation of your solution here
    //convert the string to lowercase and remove spaces
    word = lowercase(str)
    word = removeSpaces(str)
  //reverse the string
    reversedStr = reverseString(word)
   //check if the original string and reversed string are equal
    if word equals reversedword:
        return true
    else:
        return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
