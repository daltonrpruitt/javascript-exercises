const reverseString = function(inString) {
    let reversed = '';
    for(let i=inString.length-1; i>=0; i--) {
        reversed += inString[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
