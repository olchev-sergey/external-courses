/* eslint-disable no-param-reassign */

class Calculator {
    constructor () {
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
        num = num || 0;       

        this.result += num;

        const f = (num2) => {
            num2 = num2 || 0;

            this.result += num2;

            return f;
        };

        f.toString = () => {
            return this.result;
        };
        
        return f;

    }

    subtract(num) {
        num = num || 0;

        this.result -= num;

        const f = (num2) => {
            num2 = num2 || 0;

            this.result -= num2;

            return f;
        };

        f.toString = () => {
            return this.result;
        };
        
        return f;
    }

    divide(num) {
        num = num || 0;

        this.result /= num;

        const f = (num2) => {
            num2 = num2 || 0;

            this.result /= num2;

            return f;
        };

        f.toString = () => {
            return this.result;
        };
        
        return f;
    }

    multiply(num) {
        num = num || 0;

        this.result *= num;

        const f = (num2) => {
            num2 = num2 || 0;

            this.result *= num2;

            return f;
        };

        f.toString = () => {
            return this.result;
        };
        
        return f;
    }
    
    
}

module.exports = Calculator;
