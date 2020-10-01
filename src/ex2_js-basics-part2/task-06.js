const isSimpleNum = function (num) {
    if (num === 0 || num === 1) {
        return 'ни простое и не составное';
    }

    for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) {
            return `Число ${num} - составное число`;
        }
    }

    return `Число ${num} - простое число`;
};

const isSimpleNumAnswer = function (num) {
    if (num > 1000 || num < 0) {
        return 'Данные неверны';
    }

    return isSimpleNum(num);
};

module.exports = isSimpleNumAnswer;
