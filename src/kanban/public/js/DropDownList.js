export class DropDownList {
    constructor(liValueArr, dropDownClassName, hiddenClassName = '') {
        this.liValueArr = liValueArr;
        this.dropDownClassName = dropDownClassName;
        this.hiddenClassName = hiddenClassName;
        
        this.dropDown = null;
        this.value = null;
        this.selectIndex = 0;

        this.createList();
        this.initKeyDown();
        this.initFocus();
    }

    getDropDownElement() {
        return this.dropDown;
    }


    createList() {
        this.dropDown = document.createElement('div');
        this.dropDown.setAttribute('tabIndex', '0');

        [...this.liValueArr, 'bogus'].forEach((str) => {
            const textNode = document.createTextNode(str);
            const div = document.createElement('div');
            div.setAttribute('tabIndex', '0');
            div.append(textNode);
            this.dropDown.append(div);
        });

        this.dropDown.classList.add(this.dropDownClassName);

        if (this.hiddenClassName) this.dropDown.classList.add(this.hiddenClassName);
    }

    initClick(callback) {
        this.dropDown.addEventListener('click', ({ target }) => {
            if (this.dropDown.firstChild === target) {
                this.dropDown.classList.remove(this.hiddenClassName);

                callback();
            }
        });
    }

    initChange(callBack) {
        this.dropDown.addEventListener('click', ({target}) => {
            if (this.dropDown.firstChild !== target) {
                this.value = target.textContent;
                this.selectIndex = this.liValueArr.findIndex((el) => el === this.value);

                callBack();
            }
        });
    }

    initBlur(callBack) {
        this.dropDown.firstElementChild.addEventListener('blur', () => {
            if (this.dropDown.classList.contains(this.hiddenClassName)) {
                callBack();
            }
        });

        this.dropDown.lastElementChild.addEventListener('focus', () => {
            this.dropDown.classList.add(this.hiddenClassName);
            
            callBack();
        });

        document.addEventListener('click', (e) => {
            const target = e.target;

            if (!target.matches(`${this.dropDownClassName} > div`) &&
                this.dropDown !== null &&
                !this.dropDown.classList.contains(this.hiddenClassName) &&
                this.dropDown.firstChild !== document.activeElement) {
                    callBack();
                }
        }); 
    }

    initFocus(callBack) {
        this.dropDown.addEventListener('focus', (e) => {
            this.dropDown.firstElementChild.focus();

            if (callBack) callBack();
        }, false);  
    }    

    initKeyDown() {
        this.dropDown.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                if (this.dropDown.contains(document.activeElement) && this.dropDown !== document.activeElement) {
                    document.activeElement.click();
                } else if (document.activeElement === this.dropDown){
                    document.activeElement.firstChild.focus();
                    document.activeElement.click();
                }
            }

            if (e.code === 'ArrowUp') {
                if (document.activeElement.previousElementSibling) {
                    document.activeElement.previousElementSibling.focus();
                }
            }

            if (e.code === 'ArrowDown') {
                if (document.activeElement.nextElementSibling) {
                    document.activeElement.nextElementSibling.focus();
                }
            }
        }, false);
    }
}
