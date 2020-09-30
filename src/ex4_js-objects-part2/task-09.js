function insertStr(str, subStr, pos) {
    const words = str.split(' ');
    words.splice(pos + 1, 0, subStr);
    return words.join(' ');
}

module.exports = insertStr;
