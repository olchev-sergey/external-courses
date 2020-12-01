class Calculator {

    static result = 0;

    constructor() {
        this.result = 0;
    }

    static getResult() {
        return this.result;
    }

    static reset() {
        this.result = 0;

        return this;
    }

    static add(num = 0) {
        this.result += num;

        return this;
    }

    static subtract(num = 0) {
        this.result -= num;

        return this;
    }

    static divide(num = 1){
        this.result /= num;

        return this;
    }

    static multiply(num = 1) {
        this.result *= num;

        return this;
    }

    static setState(state) {
        if (state) this.result = state;

        return this;
    }

    static fetchData(callBack) {
        setTimeout(() => {
            if (callBack) {
                callBack(500);
            }
        }, 1000);
    }
    
}

module.exports = Calculator;
