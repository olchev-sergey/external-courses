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
            if (state) this.result = state;

            return this;
        };

        this.fetchData = (callBack) => {
            setTimeout(() => {
                if (callBack) {
                    callBack(500);
                }
            }, 1000);
        };
    }
}

module.exports = Calculator;
