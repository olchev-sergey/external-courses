class Calculator {
    constructor (){
        this.result = 0;
    }

    getResult() {
        return this.result;
    }

    reset() {
        this.result = 0;
        return this.result;
    }

    add(num) {
        this.result += num;
        return this.result;
    }

    subtract(num) {
        this.result -= num;
    }
    
}

const calc = new Calculator();

