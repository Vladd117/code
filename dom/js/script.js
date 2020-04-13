let button1 = {
    beckColor: 'black',
    textColor: 'burlywood'
};
let newColor = function(color) {
    let element = document.getElementById("btn01");
    element.style.backgroundColor = color;
};
let nColor = function(color) {
    let element = document.getElementById("btn02");
    element.style.backgroundColor = color;
    element.innerHTML = color;
};

function validateForm() {
    let element = document.forms.form01.fname.value;
    if (element == "") {
        alert("Name is empty");
        return false;
    }

}
let red = 1;
let redText = 254;
let i = 1;

let box = document.querySelectorAll('.box');
console.log(box);
let color = window.setInterval(() => {
    red += i;
    redText -= i;
    box[0].style.backgroundColor = 'rgb(' + red + ',0,0)';
    box[0].style.color = 'rgb(' + redText + ',0,0)';
    if (red > 254 || red < 1) {
        console.log(i);
        i *= -1;

        //red = 0;
    }
}, 30);
console.log(i);


//console.log(red);