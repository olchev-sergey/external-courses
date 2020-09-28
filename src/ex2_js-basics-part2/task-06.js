let isSimpleNum = function(num) {
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) {
            return false;
        }
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
