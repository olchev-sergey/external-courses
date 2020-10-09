const slice = (array, begin, end) => {
    let start = begin || 0;
    let toEnd = end || array.length;

    if (start < 0) {
        start = array.length + start;
    }

    if (toEnd < 0) {
        toEnd = array.length + toEnd;
    }

    const copyArr = [];

    for (let i = start; i < toEnd; i++) {
        copyArr.push(array[i]);
    }

    return copyArr;
};

module.exports = slice;
