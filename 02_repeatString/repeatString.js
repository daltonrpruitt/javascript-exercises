const repeatString = function(inString, numTimes) {
    let result = '';
    if (numTimes < 0) return "ERROR";
    for(let i=0; i<numTimes; ++i) {
        result += inString;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
