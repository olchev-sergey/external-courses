
const constructorCreateElement = (tagName, className) => {
    return () => {
        const element = document.createElement(tagName);
        element.classList.add(className);

        return element;
    };
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

        strArr.forEach((str) => {
            const li = document.createElement('li');
            const textNode = document.createTextNode(str);
            li.append(textNode);
            ul.append(li);
        });

        return ul;
    }
};

const constructorCreateDropDown = (className) => {

    return (strArr) => {
        const ul = constructorCreateUlFromArr(className)(strArr);
        ul.addEventListener('click', (e) => {
            console.log(e.target.textContent);
        });

        return ul;
    };

};

const getUlItemValue = (ul) => {
    return Array.prototype.map.call(ul.children, (child) => {
        return child.innerHTML;
    });
};

