import { TaskBlock } from './TaskBlockElement.js';
import { TaskBlockDDL } from './TaskBlockWithDDL.js';

export class Board {
    constructor(domBlock = null) {
        this.block = domBlock;
        
        this.observers = [];
        this.tasks = [];
        this.tasksValue = null;

        this.domTaskBlocks = document.querySelectorAll('.task-block');
    }

    setCounterTask(active, finished) {
        this.activeTasks = active;
        this.finishedTasks = finished;
    }

    async _requestData() {
        const promise = await fetch('/task/getData');

        try {
            const responseData = await promise.json();
            this.tasksValue = responseData;
        } catch(e) {
            console.log('ooohhhhh, no', e);
        }

        return this.tasksValue;
    }

    createBlock(blockInfo) {
        const div = `
            <div class="task-block">
                <div class="task-block__title">
                    <div class="task-block__title-text">
                        ${blockInfo.title}
                    </div>

                    <div class="task-block__title-burger">
                        •••
                    </div>
                </div>

                <ul class="task-block__task-list">
                    `+
                    blockInfo.issues.reduce((sum, current) => {
                        return sum + `<li class="task-block__list-item">${current.name}</li>`;
                    }, '')          
                    +`
                </ul>

                <button class="task-block__add-btn" tabindex="0"> + Add card</button>
            </div>
        `;

        return div;
    }

    renderBoard(blockArr = this.tasksValue) {
        this.block.innerHTML = '';

        if (blockArr.length === 0) {
            this.block.innerHTML = `<p>No task block</p>`;

            return;
        }

        blockArr.forEach((blockInfo) => {
            const block = this.createBlock(blockInfo);
            this.block.innerHTML += block;
        });

        this.initTaskBlocks();
    }

    async _deleteBlock(id) {
        const promise = await fetch('/task/deleteBlock', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id": this.id
            })
        });

        try {
            const responseData = await promise.json();
            this.tasksValue = responseData;
        } catch(e) {
            console.log('ooohhhhh, no', e);
        }
    }

    async initTaskBlocks() {
        this.domTaskBlocks = document.querySelectorAll('.task-block');
        const dataArr = await this._requestData();
        
        this.tasks = dataArr.map((taskData, i, arr) => {
            if (i === 0) {
                const task = new TaskBlock(this.domTaskBlocks[i], taskData.issues, i);
                task.renderTaskList();
                
                return task;
            }

            const task = new TaskBlockDDL(this.domTaskBlocks[i], taskData.issues, i);
            const prevBlockData = arr[i-1].issues;
            task.setAddBtnStatus(prevBlockData.length);
            task.setDropDownListValue(prevBlockData.map((elem) => elem.name));
            task.renderTaskList();

            return task;
        });

        for (let i = 0; i < this.tasks.length; i++) {
            this.tasks[i].initOptionsClickListener(async (blockId) => {
                await this._deleteBlock(blockId);
                this.renderBoard();
            });

            this.tasks[i].setAddReqListener(async (addData) => {
                if (i !== 0) {
                    await this.tasks[i-1]._fetchRequestDelete(addData);
                    this.tasks[i].setDropDownListValue(this.tasks[i-1].taskTextArr);

                    if (i === this.tasks.length - 1) {
                        this.finishedTasks.innerHTML = Number(this.finishedTasks.innerHTML) + 1;
                        this.activeTasks.innerHTML = Number(this.activeTasks.innerHTML) - 1;

                        return;
                    }                    
                }

                if (i === 0) {
                    this.activeTasks.innerHTML = Number(this.activeTasks.innerHTML) + 1;
                }

                this.tasks[i+1].setDropDownListValue(this.tasks[i].taskTextArr);
                this.tasks[i+1].setAddBtnStatus(this.tasks[i].taskTextArr);
            });

            this.tasks[i].setDelReqListener(() => {
                this.tasks[i+1].setAddBtnStatus(this.tasks[i].taskTextArr.length);
            });
        }
    }
}


