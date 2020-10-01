const isArrIdentical = function (arr) {
    const firstEl = arr[0];

    for (let elem of arr) {
        if (elem !== firstEl) {
            return false;
        }
    }

    return true;
};

module.exports = isArrIdentical;
