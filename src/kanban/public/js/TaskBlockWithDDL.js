import { TaskBlock } from './TaskBlockElement.js';
import { DropDownList } from './DropDownList.js';

export class TaskBlockDDL extends TaskBlock {
    constructor(taskBlock, taskTextArr, id) {
        super(taskBlock,taskTextArr, id);
    }

    initBtnListener() {
        this.addBtn.addEventListener('click', () => {
            this._btnClick();
        });
    }

    setDropDownListValue(data) {
        this.dropDownListValue = data;
    }

    setPrevBlock(taskBlock) {
        this.dependentBlock = taskBlock;
        this.setAddBtnStatus(this.dependentBlock.isTaskListEmpty());
    }

    setNextBlock(taskBlock) {
        this.nextBlock = taskBlock;
    }

    _btnClick() {
        const li = document.createElement('li');
        const dropDownList = new DropDownList(['Choose item', ...this.dropDownListValue], 'task-block__drop-down', 'task-block__drop-down--hidden');

        li.append(dropDownList.getDropDownElement());
        this.ul.append(li);

        dropDownList.initClick(() => {
            this.ul.scrollTop = this.ul.scrollHeight;
        });

        dropDownList.initBlur(() => {
            if (dropDownList.selectIndex === 0) {
                li.remove();
                dropDownList.dropDown.remove();
            } 
        });

        dropDownList.initChange(async () => {
            await this._fetchRequestAdd(dropDownList.value);
            dropDownList.dropDown.remove();
        });
    }
}