function Candy(name, type, weight) {
    this._name = name;
    this._type = type;
    this._weight = weight;
}

Candy.prototype.setWeight = function (weight) {
    this._weight = weight;
};

Candy.prototype.getWeight = function () {
    return this._weight;
};

Candy.prototype.getName = function () {
    return this._name;
};

Candy.prototype.toString = function () {
    return `Name: ${this._name}, Type: ${this._type}, Weight: ${this._weight}`;
}

function Present(...sweets) {
    this._sweets = [...sweets];
    this._weight = 0;

    this.updateWeight();
}

Present.prototype.updateWeight = function () {
    this._weight = this._sweets.reduce((prev, sweet) => {
        return prev + sweet.getWeight();
    }, 0);
};

Present.prototype.setSweets = function (...sweets) {
    this._sweets = sweets;
};

Present.prototype.getWeight = function () {
    return this._weight;
};

Present.prototype.printSweets = function () {
    this._sweets.forEach((sweet, i) => {
        console.log(`${i + 1}) ` + sweet.toString());    
    });
};

Present.prototype.findSweetByName = function (name) {
    return this._sweets.find((sweet) => sweet.getName() === name);
};

Present.prototype.sortSweetsByProperty = function (compareFunction) {
    this._sweets.sort(compareFunction);

    return this._sweets;
};

