const constructorCreateUl = (className) => {

    return () => {
        const ul = document.createElement('ul');
        ul.classList.add('className');

         return ul;
    };
};


const constructorCreateLi = (className) => {
    return () => {
        const li = document.createElement('li');
        li.classList.add(className);

        return li;
    }
};

const constructorCreateInput = (className) => {
    return () => {
        const input = document.createElement('input');
        input.classList.add(className);

        return input;
    }
};

const constructorCreateSelect = (className) => {
    return (strArr) => {
        const select = document.createElement('select');
        select.classList.add(className);

        for (const str of strArr) {
            const option = document.createElement('option');
            const textNode = document.createTextNode(str);
            option.append(textNode);
            select.append(option);
        }

        return select;
    };
};


const getUlItemValue = (ul) => {
    const valueArr = [];

    for (const ulItem of ul.children) {
        valueArr.push(ulItem.innerHTML);
    }

    return valueArr;
};

const deleteChildren = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

