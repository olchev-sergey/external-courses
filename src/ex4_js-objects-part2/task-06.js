let toUpInEachWord = (str) => {
    return str.split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1, str.length);
        })
        .join(' ');    
};

module.exports = toUpInEachWord;
