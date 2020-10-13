const filter = (array, callback) => {
    const resultArr = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            resultArr.push(array[i]);
        }
    }

    return resultArr;
};

module.exports = filter;
