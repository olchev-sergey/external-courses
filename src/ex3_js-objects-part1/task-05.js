const copyObj = (obj) => {
    return Object.assign({}, obj);
    // return {...obj}; //other method, but eslint ban it
};

module.exports = copyObj;
