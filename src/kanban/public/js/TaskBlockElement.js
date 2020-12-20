
import DropDownList from './DropDownList.js';

export default class TaskBlock {

    constructor(taskBlock, taskTextArr, id) {
        this.block = taskBlock;
        this.id = id;
        this.taskTextArr = this.dataToTextArr(taskTextArr);
        this.optionsBtn = taskBlock.querySelector('.task-block__title-burger');
        this.ul = taskBlock.children[1];
        this.addBtn = taskBlock.children[2];

        this.initBtnListener();
    } 

    initOptionsClickListener(cbk) {
        let drop = false;
        const dropDownList = new DropDownList(['', 'Delete'], 'options-drop-down', '');
        this.optionsBtn.addEventListener('click', (e) => {
            drop = !drop;
            
            if (drop) {
                this.optionsBtn.parentElement.append(dropDownList.getDropDownElement());
                dropDownList.initChange(() => {
                    this.block.remove();

                    cbk(this.id);
                });
            } else {
                dropDownList.getDropDownElement().remove();
            }
        });
    }

    async _updateFetchRequest() {
        const promise = await fetch('/task/')
    }

    dataToTextArr(reqData) {
        return reqData.map((elem) => elem.name);
    }

    getLiTextArr() {
        const li = this.block.querySelectorAll('ul > li');
        const textArr = [].map.call(li, (elem) => {
            return elem.textContent;
        });

        return textArr;
    }

    isTaskListEmpty() {
        return Boolean(this.getLiTextArr().length);
    }

    setAddBtnStatus(bool) {
        if (!bool) {
            this.addBtn.classList.add('task-block__add-btn--disabled');
        } else {
            this.addBtn.classList.remove('task-block__add-btn--disabled');
        }
    }

    setAddReqListener(cbk) {
        this.updateCallback = cbk;
    }

    setDelReqListener(cbk) {
        this.deleteCallback = cbk;
    }

    async _fetchRequestAdd(data) {
        const promise = await fetch('/task/addData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": data,
                "id": this.id
            })
        });

        try {
            const responseData = await promise.json();

            this.taskTextArr = this.dataToTextArr(responseData.issues);
            this.renderTaskList(this.dataToTextArr(responseData.issues));

            if (this.updateCallback) {
                this.updateCallback(data);
            }

        } catch(e) {
            console.log('ooohhhhh, no', e);
        }
    }

    async _fetchRequestDelete(data) {
        const promise = await fetch('/task/deleteData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "value": data,
                "id": this.id
            })
        });

        try {
            const responseData = await promise.json();
            this.taskTextArr = this.dataToTextArr(responseData.issues);
            this.renderTaskList(this.dataToTextArr(responseData.issues));

            if (this.deleteCallback) {
                this.deleteCallback(data);
            }

        } catch(e) {
            console.log('ooohhhhh, no', e);
        }
    }

    _btnClick() {

        const li = document.createElement('li');
        const input = document.createElement('input');
        li.append(input);
        this.ul.append(li);

        input.focus();


        input.addEventListener('change', async () => {
            await this._fetchRequestAdd(input.value);
            input.remove();
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                li.remove();
                input.remove();
            }
        });
    }

    initBtnListener() {
        this.addBtn.addEventListener('click', () => {
            this._btnClick();
        });

    }

    renderTask(task) {
        const li = document.createElement('li');
        li.classList.add('task-block__list-item')

        const textNode = document.createTextNode(task);
        li.append(textNode);

        return li;
    }


    renderTaskList(data = this.taskTextArr) {
        const currentTaskArr = this.getLiTextArr();
        if (JSON.stringify(currentTaskArr) === JSON.stringify(data)) {
            return;
        } 

        this.ul.innerHTML = '';

        data.forEach((task) => {
            this.ul.append(this.renderTask(task));
        });
    }
}
