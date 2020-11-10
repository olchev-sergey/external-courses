/*eslint no-param-reassign: ["error", { "props": false }]*/

const imgUrlArr = [
    './asset/EPAM_office.jpg',
    './asset/logo.png',
    './asset/epam-global.jpg'
];

const copyImgUrlArr = [...imgUrlArr];

window.onload = () => {
    const sliderImage = document.querySelector('.main-image');
    const bogusImage = document.querySelector('.bogus-image');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => {
        copyImgUrlArr.unshift(copyImgUrlArr.pop());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
        bogusImage.style.backgroundImage = `url(${copyImgUrlArr[1]})`;
        moveAnim(sliderImage, bogusImage, -100, 100, 'right', 500);
    }, false);

    arrowRight.addEventListener('click', () => {
        copyImgUrlArr.push(copyImgUrlArr.shift());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
        bogusImage.style.backgroundImage = `url(${copyImgUrlArr[copyImgUrlArr.length -1]})`;
        moveAnim(sliderImage, bogusImage, 100, 100, 'left', 500);
    }, false);

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            document.activeElement.click();
        }
    }, false);

    document.querySelector('.slider-image-wrapper').addEventListener('focus', () => {
        arrowLeft.focus();
    });
};


function moveAnim(mainImage, bogusImage, startPosLeft,moveLength, direction, animDuration) {
    animSlider(bogusImage, 0,moveLength, direction, animDuration);
    animSlider(mainImage, startPosLeft,moveLength, direction, animDuration);
}

function animSlider(imgBlock, startPosLeft,moveLength, direction, animDuration) {
    imgBlock.style.left = startPosLeft + '%';
    const timeInterval = animDuration / 100;
    let posStep;

    if (direction === 'left') {
        posStep = -1;
    } else if (direction === 'right') {
        posStep = 1;
    }

    let posLeft = startPosLeft;

    const timer = setInterval(() => {
        posLeft += posStep;
        imgBlock.style.left = posLeft + '%';

        if (posLeft === (startPosLeft + (posStep * moveLength))) {
            clearInterval(timer);

            return;
        }
    }, timeInterval);
}
