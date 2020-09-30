const countLetter = (str) => {
    let count = {};    

    for (const letter of str) {
        if (letter in count) {
            count[letter] +=1;
        } else {
            count[letter] = 1;
        }
    }

    for (const key in count) {
        console.log(key, ':', count[key]);
    }
};

module.exports = countLetter;
