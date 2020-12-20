import TaskBlock from './TaskBlockElement.js';
import DropDownList from './DropDownList.js';

export default class TaskBlockDDL extends TaskBlock {


    // prevBlock = null;
    // nextBlock = null;

    constructor(taskBlock, taskTextArr, id) {
        super(taskBlock,taskTextArr, id);

        // this.initBtnListener();

    }

    // _btnClickContext = this._btnClick.bind(this);

    initBtnListener() {
        // this.addBtn.addEventListener('click', this._btnClickContext(callback));
        this.addBtn.addEventListener('click', () => {
            this._btnClick();
        });
    }

    setDropDownListValue(data) {
        // this.dropDownListValue = this.dataToTextArr(data);
        this.dropDownListValue = data;
        // console.log(data);

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

        // const liPrevArr = this.dependentBlock.getLiTextArr();
        // console.log(this.dropDownListValue);
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

            // await this.dependentBlock._fetchRequestDelete(dropDownList.value);
            await this._fetchRequestAdd(dropDownList.value);
            // callback(dropDownList.value);
            // this.setAddBtnStatus(this.dependentBlock.isTaskListEmpty());

            dropDownList.dropDown.remove();
        });
    }

}