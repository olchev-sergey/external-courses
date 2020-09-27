let f = function(arr) {
    //кол-во нечетных чисел
    let oddNumCount = 0;
    //кол-во четныхs чисел
    let evenNumCount = 0;
    //кол-во нулей
    let zeroNumCount = 0;
    arr.forEach( (element) => {
        if (typeof element == 'number' && !Number.isNaN(element)) {
            if (element == 0) {
                zeroNumCount += 1;
            } else if (element % 2 == 0) {
                evenNumCount += 1;
            } else {
                oddNumCount += 1;
            }
        }        
    });

    return [evenNumCount, oddNumCount, zeroNumCount];
};

module.exports = f;
