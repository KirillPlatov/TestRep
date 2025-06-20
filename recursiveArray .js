let number = [1, [1, 2, 3], 3];

let milty = function (arr) {
    return arr.map(num => {
        if (Array.isArray(num)) {
            return milty(num); 
        } else {
            return num * 2;
        }
    });
};

console.log(milty(number)); 