const dataMock = [
    {
        title: 'backlog',
        issues: [
            {
                id: 'task1',
                name: 'Login page – performance issues',
            },
            {
                id: 'task2',
                name: 'Sprint bugfix',
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

// console.log(getDataValueArr(dataMock));
const createUl = () => {
    const ul = document.createElement('ul');
    ul.classList.add('task-block__task-list');

    return ul;
};

const createLi = () => {
    const li = document.createElement('li');
    li.classList.add('task-block__list-item');

    return li;
};

const taskBlockUlArr = document.querySelectorAll('.task-block__task-list');
const ulValueArr = getDataValueArr(dataMock);

for (let i = 0; i < taskBlockUlArr.length; i++) {
    ulValueArr[i].forEach((value) => {
        const li = createLi();
        const textNode = document.createTextNode(value);

        li.append(textNode);
        taskBlockUlArr[i].append(li);
    });
}

const getUlItemValue = (ul) => {
    const valueArr = [];

    for (const ulItem of ul.children) {
        valueArr.push(ulItem.innerHTML);
    }

    return valueArr;
};

const taskBlockArr = document.querySelectorAll('.task-block');

class TaskBlock {
    constructor(taskBlock) {
        this.taskBlock = taskBlock;
        this.title = taskBlock.children[0];
        this.ul = taskBlock.children[1];
        this.addBtn = taskBlock.children[2];

        this.liArr = this.ul.children;
        this.liValueArr = getUlItemValue(this.ul);
    }
}

const backlogBlock = new TaskBlock(taskBlockArr[0]);
console.log(backlogBlock);



const createInput = () => {
    const input = document.createElement('input');
    input.classList.add('task-block__input');

    return input;
};



const createSelect = (strArr) => {
    const select = document.createElement('select');

    for (const str of strArr) {
        const option = document.createElement('option');
        const textNode = document.createTextNode(str);
        option.append(textNode);
        select.append(option);
    }

    return select;
};

const addCardBtnArr = document.querySelectorAll('.task-block__add-btn');

const addCardBtn = addCardBtnArr[0];
const taskBlockList = document.querySelector('.task-block__task-list');

const readyAddBtn = addCardBtnArr[1];

taskBlockList.addEventListener('dblclick', (e) => {
    // e.target.innerHTML = '';
    const target = e.target;
    // console.log(e.target);
    // taskBlockList.remove(e.target);
    target.parentNode.removeChild(target);
    console.log(taskBlockList.children);
});

addCardBtn.addEventListener('click', (e) => {
    const li = createLi();
    const input = createInput();
    li.append(input);
    taskBlockList.append(li);
    input.focus();

    input.addEventListener('change', () => {
        const textNode = document.createTextNode(input.value);
        li.append(textNode);
        input.remove();
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            li.remove();
            input.remove();
        }
    });

}, false);

readyAddBtn.addEventListener('click', (e) => {
    const backlogValue = getUlItemValue(taskBlockList);
    const select = createSelect(['your choose',...backlogValue]);
    const li = createLi();
    li.append(select);

    const readyUl = readyAddBtn.parentNode.children[1];
    console.log(backlogValue);
    readyUl.append(li);
    select.focus();


    select.addEventListener('blur', () => {
        const textNode = document.createTextNode(select.value);
        li.append(textNode);
        select.remove();
    }, false);

}, false);
