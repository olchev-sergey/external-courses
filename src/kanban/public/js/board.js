import TaskBlock from './TaskBlockElement.js';
import TaskBlockDDL from './TaskBlockWithDDL.js';

const blockes = document.querySelectorAll('.task-block')

const board = [].map.call(blockes, (el, i) => {
    if (i === 0) {
        const taskBlock = new TaskBlock(el, i);
        taskBlock.initBtnListener();

        return taskBlock;
    }


    const taskBlockWDDL = new TaskBlockDDL(el, i, );
    taskBlockWDDL.initBtnListener();
    

    return taskBlockWDDL;
});

board.forEach((elem, i) => {
    if (i !== 0) {
        board[i].setPrevBlock(board[i-1]);
    }
});

console.log(board);
