const printObj = function (obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(key + ':' + obj[key]);
      }     
    }

    return;
};

module.exports = printObj;
