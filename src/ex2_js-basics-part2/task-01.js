const checkType = function (x) {
    const typeX = typeof x;

    if (typeX === 'string') {
        return typeX;
    }

    if (typeX === 'number') {
        if (Number.isNaN(x)) {
            return undefined;
        } 

        return typeX;
    }
    
    return undefined;   
}

module.exports = checkType;
