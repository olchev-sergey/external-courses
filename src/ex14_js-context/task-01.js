/* eslint-disable no-param-reassign */

class Calculator {
    constructor() {
        this.result = 0;

        this.getResult = () => {
            return this.result;
        };

        this.reset = () => {
            this.result = 0;

            return this;
        };

        this.add = (num = 0) => {
            this.result += num;

            return this;
        };

        this.subtract = (num = 0) => {
            this.result -= num;

            return this;
        };

        this.divide = (num = 1) => {
            this.result /= num;

            return this;
        };

        this.multiply = (num = 1) => {
            this.result *= num;

            return this;
        };

        this.setState = (state) => {
            this.result = state;
        };

        this.fetchData = (callBack) => {
            setTimeout(() => {
                //emulate a request
                //do something
                callBack();
                this.setState(500);
            }, 1000);
        };
    }
}

const calc = new Calculator();

module.exports = calc;
