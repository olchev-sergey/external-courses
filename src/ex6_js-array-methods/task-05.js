const map = (array, callback) => {
    const resultArr = [];

    for (let i = 0; i < array.length; i++) {
        resultArr.push(callback(array[i], i, array));
    }

    return resultArr;
};

module.exports = map;
