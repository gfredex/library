// let point01 = 'Вёрстка соответствует макету. Ширина экрана 768px';
// let point01Num = 26;
// let point02 = 'Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется';
// let point02Num = 12;
// let point03 = 'На ширине экрана 768рх реализовано адаптивное меню';
// let point03Num = 12;


// console.log(`Моя самооценка:\n${point01} +${point01Num};\n${point02} +${point02Num};\n${point03} +${point03Num};\nОбщая сумма балов: ${point01Num + point02Num + point03Num}`);

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".nav__burger").addEventListener('click', function (doIt) {
        doIt.stopPropagation();
        document.querySelector(".nav__burger").classList.toggle("open");
        document.querySelector(".list__nav").classList.toggle("open");
        document.body.classList.toggle('open');
    });

    document.addEventListener("click", function () {
        if (document.querySelector(".nav__burger").classList.contains("open")) {
            document.querySelector(".nav__burger").classList.toggle("open");
            document.querySelector(".list__nav").classList.toggle("open");
            document.body.classList.toggle('open');
        }

    });
    // Слайдер в блоке About
    document.querySelector('.button__pagination>.dot__paginagion.activ').style.cursor = "default"; // у активной кнопки отсутствует cursore: pointer
    let indexSlider = 0;
    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('button__pagination')) {
            if (event.target.children[0].classList.contains('dot__paginagion')) {
                console.log(event.target.children[0].classList);
                document.querySelectorAll('.slid__about').style.transform = "translateX(-475px)";
            }

            // console.log(event.children.querySelector('dot__paginagion'));
        } else if (event.target.classList.contains('dot__paginagion')) {
            console.log('Попал в точку, нужно проверить положение')
            console.log(event.target.classList);
        }


    });

    // нужно опеределить перменную которая будет отвечать за кнопку перелистывания слайдера

});