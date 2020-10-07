/* eslint-disable no-param-reassign */
/*
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
*/

function Calculator() {
    this.result = 0;

    this.getResult = function () {
        return this.result;
    };

    this.reset = function() {
        this.result = 0;

        return this.result;
    };

    this.add = function (num) {
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

    };

    this.subtract = function (num) {
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
    };

    this.divide = function (num) {
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
    };

    this.multiply = function (num) {
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
    }; 
}

// const calculator = new Calculator();
// calculator.add(3)(5);
// console.log(calculator.getResult());
module.exports = new Calculator;

