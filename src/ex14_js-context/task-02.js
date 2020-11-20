class Hangman {
    constructor(word) {
        this.hiddenWord = word;
        
        this.init();

        this.startAgain = (word) => {
            this.hiddenWord = word;
            this.init();

            return this;
        };

        this.getGuessedString = () => {
            return this.shownWord;
        };

        this.getErrorsLeft = () => {
            return this.lifes;
        };

        this.getErrorsLeftString = () => {
            return `errors left ${this.lifes}`;
        };

        this.getWrongSymbols = () => {
            return this.wrongSymbolsArr;
        };

        this.getStatus = () => {
            return `${this.shownWord} | ${this.getErrorsLeftString()}`;
        };

        this.replaceLetter = (char) => {
            if (char === "") return false;

            const indices = [];
            let index = this.hiddenWord.indexOf(char);

            while (index !== -1) {
                indices.push(index);
                index = this.hiddenWord.indexOf(char, index + 1);
            }

            if (indices.length === 0) {
                this.wrongSymbolsArr.push(char);
                this.lifes -= 1;
                return false;
            }

            indices.forEach((index) => {
                this.shownWordArr[index] = char;
            });

            this.shownWord = this.shownWordArr.join("");

            return true;
        };

        this.guess = (char) => {
            const trueGuess = this.replaceLetter(char);

            if (trueGuess) {
                console.log(`${this.shownWord}`);;

                return this;
            }

            console.log(`wrong letter, ${this.getErrorsLeftString()} | ${this.wrongSymbolsArr.join(",")}`);

            return this;
        };
    }

    init() {
        this.shownWordArr = [...new Array(this.hiddenWord.length)].map(() => "_");
        this.shownWord = this.shownWordArr.join("");
        this.lifes = 6;
        this.wrongSymbolsArr = [];
    }
}

module.exports = Hangman;
