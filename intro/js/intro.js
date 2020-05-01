let intro = {
    introImg: document.querySelectorAll('.intro-img'),
    prevSlide: 0,
    nextSlide: document.querySelectorAll('.intro-img').length - 1,
    slideUp: function() {
        setTimeout(() => {
            this.prevSlide += 1;
            this.nextSlide = this.prevSlide - 1;
            if (this.prevSlide > this.introImg.length - 1) {
                this.prevSlide = 0;
                this.nextSlide = this.introImg.length - 1;
            }
            this.introImg[this.prevSlide].style.transform = "scale(1)";
            this.introImg[this.prevSlide].style.opacity = 1;
            this.introImg[this.nextSlide].style.transform = "scale(2)";
            this.introImg[this.nextSlide].style.opacity = 0;
            this.slideUp();
        }, 7000);
    },
};
window.addEventListener('DOMContentLoaded', () => {
    intro.introImg[0].style.transform = "scale(1)";
    intro.introImg[0].style.opacity = 1;
    intro.slideUp();
});