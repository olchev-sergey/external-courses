const isArrIdentical = function(arr) {
    for (let elem of arr) {
        if (elem !== arr[0]) {
            return false;
        }
    }
    return true;
};

module.exports = isArrIdentical;
