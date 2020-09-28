function findInProto(searchKey, obj) {
    if (obj.__proto__.hasOwnProperty(searchKey)) {
        return obj.__proto__[searchKey];
    }

    return undefined;
}

module.exports = findInProto;