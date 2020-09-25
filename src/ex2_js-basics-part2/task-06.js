let isSimpleNum = function(num) {
   if (num === 1 || num === 2 || num === 5) {
        return true;
    }
    if (
        num % 2 === 0 
        || num % 3 === 0
        || num % 5 === 0 
        || num % 7 === 0
    ) {
        return false;
    }
    return true;
};




let f = function(num) {
    if (num > 1000) {
        return 'Данные неверны';
    }
    const answer = isSimpleNum(num) ? 'простое' : 'составное';
    return `Число ${num} - ${answer} число`;
};




module.exports = isSimpleNum;
module.exports = f;