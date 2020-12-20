/*eslint no-param-reassign: ["error", { "props": false }]*/


const url = 'task-02-dataMock.json';

function debounce(func, msBlock) {
    let cache = false;
    let timerId = null;

    return function (...args) {
        if (cache) {
            clearInterval(timerId);
            cache = false;
        }

        timerId = setTimeout(() => {
            func.apply(this, args);
        }, msBlock);

        cache = true;
    }
}

const getData = async (url) => {    
    try {
        const response = await fetch(url);

        return response.json();
    } catch (e) {
        console.error(e);
    }

    return {};
};

const writeData = async (element, inputValue) => {
    const data = await getData(url);
    const dataKeys = Object.keys(data);

    const resData = dataKeys.filter((element) => {
        return element.includes(inputValue);
    });

    element.innerHTML = '';

    resData.forEach((data) => {
        element.insertAdjacentHTML('beforeend', data + '<br>');
    });
};

const debounceWriteData = debounce(writeData, 1500);
const div = document.querySelector('div');
const input = document.querySelector('input');

input.addEventListener('keyup', (e) =>{
    debounceWriteData(div, input.value);
});







