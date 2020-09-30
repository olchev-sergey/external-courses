const isSimpleNum = function(num) {
    if (num === 0 || num === 1) {
        return null;
    }

    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const f = function(num) {
    if (num > 1000) {
        return 'Данные неверны';
    }
    let answer = '';
    if (isSimpleNum(num) === null) {
        answer = 'ни простое и не составное';
    } else {
        answer = isSimpleNum(num) ? 'простое' : 'составное';
    }

    return `Число ${num} - ${answer} число`;
};

module.exports = isSimpleNum;
module.exports = f;
