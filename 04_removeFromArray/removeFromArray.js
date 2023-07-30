const removeFromArray = function(originalArray, ...toRemove) {
    for (let i=0; i < toRemove.length; ++i) {
        let index = originalArray.indexOf(toRemove[i]);
        if(index >= 0 ) {
            originalArray.splice(index,1);
        }
    }
    return originalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
