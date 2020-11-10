const deleteSpaces = (str) => {
    const start = str[0] === ' ' ? 1 : 0;    
    const end = str[str.length - 1] === ' ' ? -1 : undefined;

    return str.slice(start, end);
};

module.exports = deleteSpaces;
