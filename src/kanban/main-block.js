const dataMock = [
    {
        title: 'Backlog',
        issues: [
            {
                id: 'task1',
                name: 'Login page – performance issues',
            },
            {
                id: 'task2',
                name: 'Sprint bugfix',
            },
            {
                id: 'task3',
                name: 'Sprdsdsddsint bugfix',
            },
        ],
    },
    {
        title: 'Ready',
        issues: [
            {
                id: 'task1',
                name: 'Shop page – performance issues',
            },
            {
                id: 'task2',
                name: 'Checkout bugfix',
            },
            {
                id: 'task3',
                name: 'Shop bug1',
            },
            {
                id: 'task4',
                name: 'Shop bug2',
            },
            {
                id: 'task5',
                name: 'Shop bug3',
            },
            {
                id: 'task6',
                name: 'Shop bug4',
            },
            {
                id: 'task7',
                name: 'Shop bug5',
            },
            {
                id: 'task8',
                name: 'Shop bug6',
            },
            {
                id: 'task9',
                name: 'Shop page – performance issues',
            },
        ],
    },
    {
        title: 'In Progress',
        issues: [
            {
                id: 'task1',
                name: 'User page – performance issues',
            },
            {
                id: 'task2',
                name: 'Auth bugfix',
            },
        ],
    },
    {
        title: 'Finished',
        issues: [
            {
                id: 'task1',
                name: 'Main page – performance issues',
            },
            {
                id: 'task2',
                name: 'Main page bugfix',
            },
        ],
    },
];

const getDataValueArr = (dataMock) => {
    const result = [];

    dataMock.forEach((taskBlock) => {
        result.push([]);
        
        taskBlock.issues.forEach((issue) => {
            result[result.length - 1].push(issue.name);
        });
    });

    return result;
};

const createUl = constructorCreateUl('task-block__task-list');
const createLi = constructorCreateLi('task-block__list-item');
const createInput = constructorCreateInput('task-block__input');
const createSelect = constructorCreateSelect('task-block__select');

const ulValueArr = getDataValueArr(dataMock);

const taskBlockArr = document.querySelectorAll('.task-block');

const backlogBlock = new TaskBlock(taskBlockArr[0]);
backlogBlock.setLiValueArr(ulValueArr[0]);
backlogBlock.updateView();
backlogBlock.initAddBtnClick();
backlogBlock.initDataMockListener(dataMock[0].issues);

const readyBlock = new TaskBlockWithSelect(taskBlockArr[1], backlogBlock);
readyBlock.setLiValueArr(ulValueArr[1]);
readyBlock.updateView();
readyBlock.initAddBtnClick();
readyBlock.initDataMockListener(dataMock[1].issues);

const progressBlock = new TaskBlockWithSelect(taskBlockArr[2], readyBlock);
progressBlock.setLiValueArr(ulValueArr[2]);
progressBlock.updateView();
progressBlock.initAddBtnClick();
progressBlock.initDataMockListener(dataMock[2].issues);

const finishedBlock = new TaskBlockWithSelect(taskBlockArr[3], progressBlock);
finishedBlock.setLiValueArr(ulValueArr[3]);
finishedBlock.updateView();
finishedBlock.initAddBtnClick();
finishedBlock.initDataMockListener(dataMock[3].issues);

backlogBlock.setNextBlock(readyBlock);
readyBlock.setNextBlock(progressBlock);
progressBlock.setNextBlock(finishedBlock);

