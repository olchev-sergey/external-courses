/*eslint no-param-reassign: ["error", { "props": false }]*/

const imgUrlArr = [
    './asset/EPAM_office.jpg',
    './asset/logo.png',
    './asset/epam-global.jpg'
];

const copyImgUrlArr = [...imgUrlArr];

window.onload = () => {
    const sliderImage = document.querySelector('.slider-image');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => {
        copyImgUrlArr.unshift(copyImgUrlArr.pop());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
        animSlider(sliderImage, -100, 500);

    }, false);

    arrowRight.addEventListener('click', () => {
        copyImgUrlArr.push(copyImgUrlArr.shift());
        sliderImage.style.backgroundImage = `url(${copyImgUrlArr[0]})`;
        animSlider(sliderImage, 100, 500);
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

function animSlider(imgBlock, startPosLeft, animDuration) {
    imgBlock.style.left = startPosLeft + '%';
    const timeInterval = animDuration / 100;
    const posStep = startPosLeft / 100 * -1;
    let posLeft = startPosLeft;

    const timer = setInterval(() => {
        posLeft += posStep;

        if (posLeft === 0 + posStep ) {
            clearInterval(timer);

            return;
        }

        imgBlock.style.left = posLeft + '%';
    }, timeInterval);
}
