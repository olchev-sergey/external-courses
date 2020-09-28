let checkType = function( x ) {
    const typeX = typeof x;
    if (typeX === 'string') {
        return 'string';
    }
    if (typeX === 'number') {
        if (Number.isNaN(x)) {
            return undefined;
        } 
        return 'number';
    }
    
    return undefined;   
}

module.exports = checkType;
