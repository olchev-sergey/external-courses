class TaskBlock {
    constructor(taskBlock) {
        this.taskBlock = taskBlock;
        this.title = taskBlock.children[0];
        this.ul = taskBlock.children[1];
        this.addBtn = taskBlock.children[2];

        this.nextBlock = null;
        this.dataMockArr = [];
        this.liArr = [];
        this.liValueArr = [];
        this.titleText= this.title.children[0].innerText;        
    }

    setNextBlock(nextBlock) {
        this.nextBlock = nextBlock;
    }

    setLiValueArr(strArr) {
        this.liValueArr = strArr;
    }

    initDataMockListener(linkData) {
        this.dataMockArr = linkData;
    }

    initDeleteLiByDblClick() {
        this.ul.addEventListener('dblclick', (e) => {
            const target = e.target;
            this.deleteLiItem(target);

            if (this.nextBlock) {
                this.nextBlock.disableBtnListener(this.liValueArr);
            }
        }, false);
    }

    deleteLiItem(li) {
        li.parentElement.removeChild(li);
        this.deleteData(li.innerText);
    }

    deleteData(value) {
        let index = -1;

        for (let i = 0; i < this.dataMockArr.length; i++) {
            if (this.dataMockArr[i].name === value) {
                index = i;
                break;
            }
        }

        this.liValueArr.splice(index, 1);
        this.dataMockArr.splice(index, 1);
    }

    addData(value) {
        this.dataMockArr.push({
            id: `task${this.dataMockArr.length + 1}`,
            name: value,
        });
    }

    initAddBtnClick() {
        this.addBtn.addEventListener('click', (e) => {
            const li = createLi();
            const input = createInput();

            li.append(input);
            this.ul.append(li);
            input.focus();

            input.addEventListener('change', () => {
                this.liValueArr.push(input.value);
                this.addData(input.value);
                const textNode = document.createTextNode(input.value);
                li.append(textNode);
                input.remove();

                if (this.nextBlock) {
                    this.nextBlock.disableBtnListener(this.liValueArr);
                }
            });

            input.addEventListener('blur', () => {
                if (input.value === '') {
                    li.remove();
                    input.remove();
                }
            });
        }, false);
    }  

    updateUl(strArr) {
        if (strArr) {
            this.liValueArr = [...strArr];
        }

        deleteChildren(this.ul);

        this.liArr = [];

        this.liValueArr.forEach((str) => {
            const li = createLi();
            const textNode = document.createTextNode(str);

            li.append(textNode);
            this.liArr.push(li);
            this.ul.append(li);
        });
    }

    updateView() {
        this.updateUl(this.liValueArr);
    }
}

//----------------------------------------------------------------------
class TaskBlockWithSelect extends TaskBlock {
    constructor(block, prevBlock) {
        super(block);

        this.prevBlock = prevBlock;
        this.dependList = prevBlock.liValueArr;
    }

    disableBtnListener(list) {
        if (list.length === 0 && this.addBtn.getAttribute('disabled') === null) {
            this.addBtn.setAttribute('disabled', 'disabled');
        } else if (list.length !== 0 && this.addBtn.getAttribute('disabled') === 'disabled') {
            this.addBtn.removeAttribute('disabled');
        }
    }

    initAddBtnClick() {
        this.addBtn.addEventListener('click', (e) => {
            const select = createSelect(['your choose', ...this.dependList]);
            const li = createLi();
            li.append(select);
            this.ul.append(li);

            const lastFocusedElement = document.activeElement;
            select.focus();

            select.addEventListener('change', (e) => {
                this.liValueArr.push(select.value);
                this.addData(select.value);

                console.log(e);

                const textNode = document.createTextNode(select.value);
                const selectIndex = select.selectedIndex;

                li.append(textNode);
                select.remove();

                this.dependList.splice(selectIndex - 1, 1);
                this.prevBlock.updateUl();
                this.disableBtnListener(this.dependList);

                if (this.nextBlock) {
                    this.nextBlock.disableBtnListener(this.liValueArr);
                }

                lastFocusedElement.focus();
            }, false);

            select.addEventListener('blur', () => {
                if (select.selectedIndex === 0) {
                    li.remove();
                    select.remove();
                }               
            }, false);
        }, false);
    }

    updateView() {
        super.updateView();
        this.disableBtnListener(this.dependList);
    }
}