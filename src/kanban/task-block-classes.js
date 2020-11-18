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
        this.titleText = '';
    }

    setNextBlock(nextBlock) {
        this.nextBlock = nextBlock;
    }

    setBlockValues(dataInfo) {
        this.titleText = dataInfo.title;
        this.liValueArr = dataInfo.issues;
    }

    initDataMockListener(linkData) {
        this.dataMockArr = linkData;
    }

    dataToLocalStorage() {
        const data = JSON.parse(localStorage.getItem('dataMock'));
        const changedIndex = data.findIndex((element) => {
            return element.title === this.titleText;
        });

        data[changedIndex].issues = this.dataMockArr;

        localStorage.setItem('dataMock', JSON.stringify(data));
    }

    initDeleteLiByDblClick() {
        this.ul.addEventListener('dblclick', (e) => {
            const target = e.target;

            if (target.parentElement === this.ul) {
                this.deleteLiItem(target);
            }

            if (this.nextBlock) {
                this.nextBlock.disableBtnListener(this.liValueArr);
            }
        }, false);
    }

    

    deleteLiItem(li) {
        li.remove();
        this.deleteData(li.innerText);
    }

    deleteData(value) {
        const index = this.dataMockArr.findIndex((element) => element.name === value);
        this.liValueArr.splice(index, 1);
        this.dataMockArr.splice(index, 1);
    }

    addData(value) {
        this.dataMockArr.push({
            id: `task${this.dataMockArr.length + 1}`,
            name: value,
        });

        this.dataToLocalStorage();
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

        this.ul.innerHTML = '';

        this.liArr = [];

        this.liArr = this.liValueArr.map((str) => {
            const li = createLi();
            const textNode = document.createTextNode(str);
            li.append(textNode);
            this.ul.append(li);

            return li;
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

        if (list.length === 0) {
            this.addBtn.classList.toggle('task-block__add-btn--disabled')
        } else if (this.addBtn.classList.contains('task-block__add-btn--disabled')) {
            this.addBtn.classList.remove('task-block__add-btn--disabled');
        }
    }

    initAddBtnClick() {
        this.addBtn.addEventListener('click', (e) => {
            // const select = createSelect(['your choose', ...this.dependList]);
            const dropDown = createSelect(['Choose', ...this.dependList]);
            const li = createLi();
            li.append(dropDown);
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
}