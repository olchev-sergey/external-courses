/*eslint no-param-reassign: "error"*/
const checkAndAddKeyInObj = (key, obj) => {
    if (!obj.hasOwnProperty(key)) {  
        obj[key] = 'new';
    }    

    return obj; 
};

module.exports = checkAndAddKeyInObj;
