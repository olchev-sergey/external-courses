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

const constructorCreateUlFromArr = (className) => {
    return (strArr) => {
        const ul = document.createElement('ul');
        ul.classList.add(className);

        for (const str of strArr) {
            const li = document.createElement('li');
            const textNode = document.createTextNode(str);
            li.append(textNode);
            ul.append(li);
        }
    }
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
