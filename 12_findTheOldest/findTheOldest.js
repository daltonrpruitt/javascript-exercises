const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();

    let withAges = array.map(p=> {
        if(p.hasOwnProperty('yearOfDeath')) {
            p['age'] = p.yearOfDeath - p.yearOfBirth;
        } else {
            p['age'] = currentYear - p.yearOfBirth;
        }
        return p;
    });
    // console.log(withAges);
    
    return withAges.reduce((oldest, person) => {
        if (person.age > oldest.age) {
            oldest = person;
        }
        return oldest;
    }, array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
