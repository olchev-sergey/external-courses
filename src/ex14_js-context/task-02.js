class Hangman {
    constructor(word) {
        this.hiddenWord = word;
        // this.shownWord = Array.from({length: this.hiddenWord.length}, () => '-');
        // this.shownWordArr = [...new Array(this.hiddenWord.length)].map(() => '_');
        // this.shownWord = this.shownWordArr.join('');
        // this.lifes = 6;
        // this.wrongSymbolsArr = [];
        this.init();


        

        this.startAgain = (word) => {
            this.hiddenWord = word;
            this.init();

            return this;
        };

        this.getGuessedString = () => {
            return console.log(this.shownWord);
        };

        this.getErrorsLeft = () => {
            return console.log(this.lifes);
        };

        this.getErrorsLeftString = () => {
            return `errors left ${this.lifes}`;
        };

        this.getWrongSymbols = () => {
            return console.log(this.wrongSymbolsArr);
        };

        this.getStatus = () => {
            return console.log(
                `${this.shownWord} | ${this.getErrorsLeftString()}`
            );
        };

        this.replaceLetter = (char) => {
            if (char === "") return false;

            const str = this.hiddenWord;
            const indices = [];
            let index = str.indexOf(char);

            while (index !== -1) {
                indices.push(index);
                index = str.indexOf(char, index + 1);
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
            const trueLet = this.replaceLetter(char);
            if (trueLet) {
                this.getGuessedString();

                return this;
            }

            console.log(
                `wrong letter, ${this.getErrorsLeftString()} | ${this.wrongSymbolsArr.join(
                    ","
                )}`
            );

            return this;
        };
    }

    init() {
        this.shownWordArr = [...new Array(this.hiddenWord.length)].map(
            () => "_"
        );
        this.shownWord = this.shownWordArr.join("");
        this.lifes = 6;
        this.wrongSymbolsArr = [];
    }
}

const hangman = new Hangman("webpurple");
// console.log(hangman.hiddenWord);
hangman.guess("w");
hangman.guess("e");
hangman.guess("a");
hangman.guess("p");
hangman.guess("k");
hangman.getGuessedString();
hangman.getErrorsLeft();
hangman.getWrongSymbols();
hangman.getStatus();

hangman.startAgain("webpurple").guess("w").getStatus();

module.exports = hangman;
