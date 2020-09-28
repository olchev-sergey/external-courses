function findInProto(searchKey, obj) {
    if (Object.getPrototypeOf(obj).hasOwnProperty(searchKey)) {
        return Object.getPrototypeOf(obj)[searchKey];
    }

    return undefined;
}

module.exports = findInProto;
