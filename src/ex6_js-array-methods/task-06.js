const reduce = (array, callback, initialValue) => {
    const start = typeof initialValue === 'undefined' ? 1 : 0;

    let previousValue = start === 1 ? array[0] : initialValue;

    for (let i = start; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }

    return previousValue;
};

module.exports = reduce;
