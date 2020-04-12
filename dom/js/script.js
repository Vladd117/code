button1 = {
    beckColor: 'black',
    textColor: 'burlywood'
};
newColor = function(color) {
    let element = document.getElementById("btn01");
    element.style.backgroundColor = color;
};
nColor = function(color) {
    let element = document.getElementById("btn02");
    element.style.backgroundColor = color;
    element.innerHTML = color;
};

function validateForm() {
    let element = document.forms["form01"]["fname"].value;
    if (element == "") {
        alert("Name is empty");
        return false;
    }

}