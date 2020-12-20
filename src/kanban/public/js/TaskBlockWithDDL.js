import TaskBlock from './TaskBlockElement.js';
import DropDownList from './DropDownList.js';

export default class TaskBlockDDL extends TaskBlock {

    prevBlock = null;
    nextBlock = null;

    constructor(taskBlock, id) {
        super(taskBlock, id);

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
        const liPrevArr = this.dependentBlock.getLiTextArr();
        const dropDownList = new DropDownList(['Choose item', ...liPrevArr], 'task-block__drop-down', 'task-block__drop-down--hidden');

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
            await this.dependentBlock._fetchRequestDelete(dropDownList.value);
            this._fetchRequestAdd(dropDownList.value);
            this.setAddBtnStatus(this.dependentBlock.isTaskListEmpty());
            dropDownList.dropDown.remove();
        });
    }

}