/*eslint no-param-reassign: "error"*/
const deepCloneObj = (obj) => {
    const target = Array.isArray(obj) ? [] : {};
    
    for (const key in obj) {        
        if (typeof obj[key] === 'object') {
            target[key] = deepCloneObj(obj[key]);
            continue;
        }
        
        target[key] = obj[key];
    }

    return target;
};

module.exports = deepCloneObj;
