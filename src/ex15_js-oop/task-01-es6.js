class Candy {

    #type = '';
    #weight = 0;
    #name = '';

    constructor(name, type, weight) {
        this.#name = name;
        this.#type = type;
        this.#weight = weight;
    }

    setWeight(weight) {
        this.#weight = weight;
    }

    getWeight() {
        return this.#weight;
    }

    getName() {
        return this.#name;
    }

    toString() {
        return `Name: ${this.#name},Type: ${this.#type}, Weight: ${this.#weight}`;
    }

}

class Present {

    #sweets = [];
    #weight = 0;

    constructor(...sweets) {
        this.#sweets = sweets;

        this.updateWeight();
    }

    setSweets(...sweets) {
        this.#sweets = sweets;
        this.updateWeight();
    }
    
    getSweets() {
        return this.#sweets;
    }
    
    addSweets(...sweets) {
        this.#sweets.push(...sweets);
        this.updateWeight();
    }

    updateWeight() {
        this.#weight = this.#sweets.reduce((prev, sweet) => {
            return prev + sweet.getWeight();
        }, 0)
    }

    getWeight() {
        return this.#weight;
    }

    printSweets() {
        this.#sweets.forEach((sweet, i) => {
            console.log(`${i + 1}) ` + sweet.toString());    
        });
    }

    findSweetByName(name) {
        return this.#sweets.find((sweet) => sweet.getName() === name);
    }

    sortSweetsByProperty(compareFunction) {
        this.#sweets.sort(compareFunction);

        return this.#sweets;
    }
}
