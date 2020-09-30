const oddEvenZeroCount = function (arr) {
    let oddNumCount = 0;
    let evenNumCount = 0;
    let zeroNumCount = 0;

    arr.forEach( (element) => {
        if (typeof element === 'number' && !Number.isNaN(element)) {
            if (element === 0) {
                zeroNumCount += 1;
            } else if (element % 2 === 0) {
                evenNumCount += 1;
            } else {
                oddNumCount += 1;
            }
        }        
    });

    return [evenNumCount, oddNumCount, zeroNumCount];
};

module.exports = oddEvenZeroCount;
