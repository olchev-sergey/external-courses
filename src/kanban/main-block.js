const dataMock = JSON.parse(localStorage.getItem('dataMock'));
const getDataMockValueArr = (dataMock) => {
    return dataMock.map((taskBlock) => {
        return {
            title: taskBlock.title,
            issues: taskBlock.issues.map((issue) => issue.name),
        };
    });
};

const createUl = constructorCreateElement('ul', 'task-block__task-list');
const createLi = constructorCreateElement('li', 'task-block__list-item');
const createInput = constructorCreateElement('input', 'task-block__input');
const createSelect = constructorCreateSelect('task-block__select');
const createDropDown = constructorCreateDropDown('task-block__drop-down');

const dataInfo = getDataMockValueArr(dataMock);

const taskBlockArr = document.querySelectorAll('.task-block');

const backlogBlock = new TaskBlock(taskBlockArr[0]);
backlogBlock.setBlockValues(dataInfo[0]);
backlogBlock.initDataMockListener(dataMock[0].issues);
backlogBlock.updateView();
backlogBlock.initAddBtnClick();
backlogBlock.initDeleteLiByDblClick();

const readyBlock = new TaskBlockWithSelect(taskBlockArr[1], backlogBlock);
readyBlock.setBlockValues(dataInfo[1]);
readyBlock.initDataMockListener(dataMock[1].issues);
readyBlock.updateView();
readyBlock.initAddBtnClick();

const progressBlock = new TaskBlockWithSelect(taskBlockArr[2], readyBlock);
progressBlock.setBlockValues(dataInfo[2]);
progressBlock.initDataMockListener(dataMock[2].issues);
progressBlock.updateView();
progressBlock.initAddBtnClick();

const finishedBlock = new TaskBlockWithSelect(taskBlockArr[3], progressBlock);
finishedBlock.setBlockValues(dataInfo[3]);
finishedBlock.initDataMockListener(dataMock[3].issues);
finishedBlock.updateView();
finishedBlock.initAddBtnClick();

backlogBlock.setNextBlock(readyBlock);
readyBlock.setNextBlock(progressBlock);
progressBlock.setNextBlock(finishedBlock);

