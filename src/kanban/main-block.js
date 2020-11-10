const dataMock = [
    {
        title: 'backlog',
        issues: [
            {
                id: 'task1',
                name: 'Sprint bugfix',
            }
        ],
   },
];



const createLi = () => {
    const li = document.createElement('li');
    li.classList.add('task-block__list-item');

    return li;
};

const createInput = () => {
    const input = document.createElement('input');
    input.classList.add('task-block__input');

    return input;
};

const getUlItemValue = (ul) => {
    const valueArr = [];
    
    for (const ulItem of ul.children) {
        valueArr.push(ulItem.innerHTML);
    }

    return valueArr;
};

const createSelect = (strArr) => {
    console.log(strArr);
    const select = document.createElement('select');

    for (const str of strArr) {
        const option = document.createElement('option');
        const textNode = document.createTextNode(str);
        option.append(textNode);
        select.append(option);
    }

    console.log(select);
    return select;
};



const addCardBtn = document.querySelector('.task-block__add-btn');
const taskBlockList = document.querySelector('.task-block__task-list');

taskBlockList.addEventListener('dblclick' , (e) => {
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
        taskBlockList.append(createSelect(['1', '2', '3']));
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            li.remove();
            input.remove();
        }
    });

}, false);

console.log(taskBlockList);
console.log(getUlItemValue(taskBlockList));

