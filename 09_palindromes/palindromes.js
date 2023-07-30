const palindromes = function (inString) {
    // The following regex replace is from this url:
    //      https://www.reddit.com/r/learnjavascript/comments/3mr62a/removing_all_nonletter_characters_from_a_string/
    // However note that the answer's author incorrectly says that this will replace numbers, which it does not according to:
    //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    inString = inString.toLowerCase().replace(/\W/ig, ""); 
    
    
    for(let i = 0; i < inString.length/2; i++) {
        if(inString[i] != inString[inString.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
