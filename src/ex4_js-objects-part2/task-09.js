const insertStr = (str, subStr, pos) => {
    const words = str.split(' ');

    const result = [].concat(words.slice(0, pos + 1), subStr, words.slice(pos + 1));

    return result.join(' ');
};

module.exports = insertStr;
