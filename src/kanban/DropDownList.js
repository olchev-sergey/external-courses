class DropDownList {
    constructor(liValueArr, dropDownClassName, hiddenClassName) {
        this.liValueArr = liValueArr;
        // this.pasteElement = elementToAppend;
        this.dropDown = null;
        this.dropDownClassName = dropDownClassName;
        this.hiddenClassName = hiddenClassName;


    }

    init() {
        this.createList();
        // this.initListClick();
        this.initKeyDown();
        this.initFocusBlur();
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
        this.dropDown.classList.add(this.hiddenClassName);
        
    }
    

    initListClick(callBack) {
        document.addEventListener('click', (e) => {
            const clickEl = e.target;

            //if li click
            if (clickEl.parentElement === this.dropDown || clickEl === this.dropDown) {
                if (clickEl === this.dropDown.firstChild) {
                    this.dropDown.classList.remove(this.hiddenClassName);
                } else {
                    
                    const listItemText = clickEl.textContent;
                    const index = this.liValueArr.findIndex((el) => el === listItemText);
                    // this.change(listItemText, )
                    // const textNode = document.createTextNode(listItemText);
                    // // const li = document.createElement('li');
                    // // li.append(textNode);
                    // this.pasteElement.append(textNode);
                    callBack(listItemText, index);
                    this.dropDown.remove();
                    this.dropDown.classList.add(this.hiddenClassName);
                }
            } else if (!clickEl.matches('.drop-down > div') &&
                this.dropDown.parentElement !== null &&
                !this.dropDown.classList.contains(this.hiddenClassName)
            ) {
                this.dropDown.remove();
                this.dropDown.classList.add(this.hiddenClassName);
            }


        }, false);
    }

    initFocusBlur(callBackBlur) {
        this.dropDown.addEventListener('focus', (e) => {
            this.dropDown.firstElementChild.focus();
        }, false);

        this.dropDown.firstElementChild.addEventListener('blur', () => {
            if (this.dropDown.classList.contains(this.hiddenClassName)) {
                this.dropDown.remove();
                btn.focus();
            }
        });

        this.dropDown.lastElementChild.addEventListener('focus', () => {
            this.dropDown.remove();
            this.dropDown.classList.add(this.hiddenClassName);
            btn.focus()
        });

    }

    initKeyDown() {

        this.dropDown.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                if (document.activeElement !== this.dropDown) {
                    document.activeElement.click();
                } else {
                    // document.activeElement.firstChild.focus();
                    // document.activeElement.click();
                }
                // else {
                //     document.activeElement.firstChild.click();
                //     document.activeElement.children[1].focus();
                // }
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
