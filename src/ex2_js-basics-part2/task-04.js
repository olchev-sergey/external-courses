let isArrIdentical = function(arr) {
    let firstElement = arr.shift();
    for (let elem of arr) {
        if (elem != firstElement) {
            return false;
        }
    }
    return true;
};

module.exports = isArrIdentical;
