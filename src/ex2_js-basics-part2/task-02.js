const printArr = function(arr) {
    arr.forEach(element => {
        console.log(element);
    });
    console.log(arr.length);
    return;
}

module.exports = printArr;
