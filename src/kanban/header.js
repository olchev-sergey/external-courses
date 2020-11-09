const createUlFromArr = (arrStr) => {
    const ul = document.createElement('ul');

    arrStr.forEach((element) => {
        const li = document.createElement('li');
        const textNode = document.createTextNode(element);
        li.append(textNode);
        ul.append(li);
    });

    return ul;
};

const profileBlock = document.querySelector('.profile-block');
const arrowElement = document.querySelector('.arrow-down');

const profileUlList = createUlFromArr(['My account', 'My tasks', 'Log out']);
profileUlList.classList.add('profile-ul');

profileBlock.addEventListener('click', () => {
    profileUlList.classList.toggle('profile-ul-active');

    if (profileUlList.classList.contains('profile-ul-active')) {
        profileBlock.append(profileUlList);
        arrowElement.style.transform = 'rotate(-135deg)';        
    } else {
        profileUlList.remove();
        arrowElement.style.transform = '';
    }

}, false);