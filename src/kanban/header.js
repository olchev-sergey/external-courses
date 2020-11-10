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


profileBlock.addEventListener('click', () => {
    profileBlock.classList.toggle('profile-block-active');

    if (profileBlock.classList.contains('profile-block-active')) {
        const profileUlList = createUlFromArr(['My account', 'My tasks', 'Log out']);
        profileUlList.classList.add('profile-ul');
        profileUlList.classList.add('profile-ul-active');

        profileBlock.append(profileUlList);
        arrowElement.style.transform = 'rotate(-135deg)';        
    } else {
        profileBlock.lastChild.remove();
        arrowElement.style.transform = '';
    }

}, false);