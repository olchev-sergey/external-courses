/*eslint no-param-reassign: "error"*/
let f = (str, obj) => {
    if (!obj.hasOwnProperty(str)) {  
        obj[str] = 'new';
    }    

    return obj; 
};


module.exports = f;
