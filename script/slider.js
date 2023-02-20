// слайдер

const slider = document.querySelector('.products-slider__items');
const buttons = document.querySelectorAll('.products-slider__arrow');
const items = document.querySelectorAll('.products-slider__item');

const sliderTransfom = (to) => {
    // const width = slider.offsetWidth;

    // const currentPosition = +slider.style.left.replace('px', '').replace('-', '')

    // let i = 0;

    // if (to === 'right') {
    //     if (currentPosition === 0) {
    //         i++
            
    //     } else if (currentPosition > 0 && currentPosition < width * (items.length - 1)) {
    //         i = currentPosition / width + 1
    //     }
    // } else {
    //     if (currentPosition === 0) {

    //         i = (items.length - 1)
    //     } else if (currentPosition > 0) {
    //         i = currentPosition / width - 1
    //     }
    // }

    // slider.style.left = `-${width * i}px`

    const width = slider.offsetWidth;
    
    let i = 0;
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        if (element.classList.contains('products-slider__item__active')) {
            i = index
        }
        element.classList.remove('products-slider__item__active');
    }

    const itemsCount = items.length;

    if (to === 'left') {
        i-=1
        if (i<0) {
            i = itemsCount - 1;
        }
    } else {
        i+=1
        if (i>itemsCount - 1) {
            i = 0;
        }        
    }

    slider.style.left = `-${width * i}px`
    items[i].classList.add('products-slider__item__active')
    
}

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.addEventListener('click', function (e) {
        e.preventDefault()
        if (this.classList.contains('.products-slider__arrow--left')) {
            sliderTransfom('left')
        } else {
            sliderTransfom('right')
        }
    })
};