let container = document.querySelector('#container');
let button = document.querySelector('button');
let forms = document.querySelector('.form');
let error = document.querySelector('.error');
let form = document.forms.frm;
//console.log(form);

function varify(size, width, heigth) {
    let errorText = '';
    if (size < 16 || size > 32) {
        errorText = 'Размер блока должен быть в диапазоне от 16 до 32 пикселей! <br>';
    }
    if (width < 5 || width > 60) {
        errorText += 'Ширина поля должна быть в диапазоне от 5 до 60 блоков! <br>';
    }
    if (heigth < 5 || heigth > 30) {
        errorText += 'Высота поля должна быть в диапазоне от 5 до 30 блоков! <br>';
    }
    return errorText;

}

function create(size, width, heigth) {
    for (var i = 0; i < width * heigth; i++) {
        //console.log('ok');
        var pix = document.createElement('div');
        pix.className = 'pix pixel';
        pix.style.minWidth = size + 'px';
        pix.style.minHeight = size + 'px';
        container.style.width = size * width + 'px';
        container.style.heigth = size * heigth + 'px';
        container.className = 'container';
        container.appendChild(pix);
        //console.log(container.style.heigth);
    }
    container.style.transform = 'translateX(-50%) translateY(-50%)';
}
button.onclick = function() {
    event.preventDefault();
    forms.style.animationName = '';
    forms.style.animationDuration = '';
    let size = Math.floor(form.elements.size.value);
    let width = Math.floor(form.elements.width.value);
    let heigth = Math.floor(form.elements.heigth.value);
    let err = varify(size, width, heigth);
    if (err == '') {
        error.style.display = 'none';
        create(size, width, heigth);
        forms.style.animationName = 'fade';
        forms.style.animationDuration = '0.5s';
        console.log(forms.style);
        forms.style.zIndex = '0';
        container.style.display = 'flex';
        setTimeout(function() {
            forms.style.display = 'none';
        }, 500);
        draw();
    } else {
        error.style.display = 'block';
        error.innerHTML = err;
        //console.log('error' + error.style);
    }


};

function draw() {
    let pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].onclick = function() {
            this.classList.toggle('pix');
            this.classList.toggle('pix-active');
        };
    }
}