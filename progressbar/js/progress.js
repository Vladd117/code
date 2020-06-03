let progress = function() {

    let progressBar = document.getElementById('progress');
    let progress = function() {
        let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let windowHeight = document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        progressBar.style.width = (windowScroll / windowHeight * 100) + '%';

        console.log(progressBar.style.width);
    };
    window.addEventListener('scroll', progress);


    console.table('It is Work!', progressBar);
};

window.addEventListener('load', () => { progress(); });