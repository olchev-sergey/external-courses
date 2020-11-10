const toUpFirst = (str) => {
    return str[0].toUpperCase() + str.slice(1, str.length);
};

const toCamelCase = (str) => {
    const camelCaseStr = str.split(' ')
        .map((word) => {
            return toUpFirst(word.toLowerCase());
        })
        .join('');

    return camelCaseStr[0].toLowerCase() + camelCaseStr.slice(1);
};

module.exports = toCamelCase;
