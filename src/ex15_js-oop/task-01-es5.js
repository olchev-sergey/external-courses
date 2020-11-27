function Candy(name, type, weight) {
    this.name = name;
    this.type = type;
    this.weight = weight;
}

Candy.prototype.setWeight = function (weight) {
    this.weight = weight;
};

Candy.prototype.getWeight = function () {
    return this.weight;
};

Candy.prototype.getName = function () {
    return this.name;
};

Candy.prototype.toString = function () {
    return `Name: ${this.name}, Type: ${this.type}, Weight: ${this.weight}`;
}

function Present(...sweets) {
    this.sweets = [...sweets];
    this.weight = 0;

    this.updateWeight();
}

Present.prototype.updateWeight = function () {
    this.weight = this.sweets.reduce((prev, sweet) => {
        return prev + sweet.getWeight();
    }, 0);
};

Present.prototype.setSweets = function (...sweets) {
    this.sweets = sweets;
};

Present.prototype.getWeight = function () {
    return this.weight;
};

Present.prototype.printSweets = function () {
    this.sweets.forEach((sweet, i) => {
        console.log(`${i + 1}) ` + sweet.toString());    
    });
};

Present.prototype.findSweetByName = function (name) {
    return this.sweets.find((sweet) => sweet.getName() === name);
};

Present.prototype.sortSweetsByProperty = function (compareFunction) {
    this.sweets.sort(compareFunction);

    return this.sweets;
};

