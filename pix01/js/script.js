var container = document.querySelector('.container');



for (var i = 0; i < 400; i++) {
    var pix = document.createElement('div');

    pix.className = 'pix';
    container.appendChild(pix);
}
container.appendChild(pix);

class ElemEvent {
    constructor(select) {
        this.elem = document.querySelectorAll(select);
    }
    eventElem(event, callback) {
        for (var i = 0; i < this.elem.length; i++) {
            this.elem[i].addEventListener(event, callback, false);
        }
    }
}

var clickPix = new ElemEvent('.container .pix');
clickPix.eventElem('click', function() {
    if (this.style.backgroundColor != 'black' && this.style.backgroundColor != 'rgb(10, 70, 90)') {
        this.style.backgroundColor = 'black';
    } else {
        this.style.backgroundColor = 'rgb(20, 101, 155)';
    }
});

clickPix.eventElem('mouseover', function() {
    if (this.style.backgroundColor != 'black' && this.style.backgroundColor != 'rgb(10, 70, 90))') {
        this.style.backgroundColor = 'rgb(50, 131, 195)';
    }
    //console.log(this.style.backgroundColor);
    if (this.style.backgroundColor == 'black') {
        this.style.backgroundColor = 'rgb(10, 70, 90)';
    }
});
clickPix.eventElem('mouseout', function() {
    if (this.style.backgroundColor == 'rgb(50, 131, 195)') {
        this.style.backgroundColor = 'rgb(20, 101, 155)';
    } else if (this.style.backgroundColor == 'rgb(10, 70, 90)') {
        this.style.backgroundColor = 'black';
    }
});
//console.log(clickPix);