let progress = function() {

    //CIRCLE PROGRESSBAR

    let circle = document.querySelector('.progress-ring-circle');
    let radius = circle.r.baseVal.value;
    let circamference = radius * Math.PI * 2;
    circle.style.strokeDasharray = `${circamference} ${circamference}`;
    circle.style.strokeDashoffset = circamference;
    console.log(circamference);

    let radProgress = function(percent) {
        let offset = circamference - percent / 100 * circamference;
        circle.style.strokeDashoffset = offset;
    };


    //LINAR PROGRESSBAR

    let progressBar = document.getElementById('progress');
    let progress = function() {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        progressBar.style.width = (windowScroll / windowHeight * 100) + '%';

        radProgress(windowScroll / windowHeight * 100);

        //console.log(progressBar.style.width);
    };
    window.addEventListener('scroll', progress);


    //console.table('It is Work!', progressBar);





};

window.addEventListener('load', () => { progress(); });