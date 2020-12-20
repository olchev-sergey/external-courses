import Board from './board.js';
import CreateTaskPopup from './CreateTaskPopup.js';

const main = document.querySelector('.main');
const activeTask = document.querySelector('#activeTasksCount');
const finishedTask = document.querySelector('#finishedTasksCount');

const board = new Board(main);
board.setCounterTask(activeTask, finishedTask);
board.initTaskBlocks();


const popup = new CreateTaskPopup('popup', 'popup-inner');
popup.setBlockAddCbk((data) => {
    board.renderBoard(data);

    
});

const createBtn = document.querySelector('.create-btn');
createBtn.addEventListener('click', (e) => {
    document.body.append(popup.getDomElement());
});

