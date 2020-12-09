export default class TaskBlock {

    constructor(taskBlock, id) {
        this.block = taskBlock;
        this.id = id;
        this.ul = taskBlock.children[1];
        this.addBtn = taskBlock.children[2];
    } 

    async _updateFetchRequest() {
        const promise = await fetch('/task/')
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
            this.renderTaskList(responseData.issues);
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
            this.renderTaskList(responseData.issues);
        } catch(e) {
            console.log('ooohhhhh, no', e);
        }
    }

    _btnClick() {
        console.log(this.isTaskListEmpty());
        const li = document.createElement('li');
        const input = document.createElement('input');
        li.append(input);
        this.ul.append(li);

        input.focus();

        input.addEventListener('change', () => {
            this._fetchRequestAdd(input.value);
            input.remove();
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                li.remove();
                input.remove();
            }
        });
    }

    _btnClickContext = this._btnClick.bind(this);

    initBtnListener() {
        this.addBtn.addEventListener('click', this._btnClickContext);
    }

    removeBtnListener() {
        this.addBtn.removeEventListener('click', this._btnClickContext);
    }


    renderTask(task) {
        const li = document.createElement('li');
        li.classList.add('task-block__list-item')
        const textNode = document.createTextNode(task.name);
        li.append(textNode);

        return li;
    }

    renderTaskList(data) {
        this.ul.innerHTML = '';

        data.forEach((task) => {
            this.ul.append(this.renderTask(task));
        });
    }
}
