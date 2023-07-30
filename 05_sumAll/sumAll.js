const sumAll = function(start, end) {
    try {
        if(! (Number.isInteger(start)  && Number.isInteger(end) )){
            throw Error("Not both integers!");
        }
        if (start < 0 || end < 0) {
            throw Error("Not both postiive!");
        }
    } catch {
        return "ERROR";
    }

    if (start > end) {
        [start, end] = [end, start];
    }
    let result = 0;
    for (let i = start; i <= end; ++i) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
