function f (obj) {
    const copyObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {        
        if (typeof obj[key] === 'object') {
            copyObj[key] = f(obj[key]);
            continue;
        }
        copyObj[key] = obj[key];
    }
    return copyObj;
};

module.exports = f;
