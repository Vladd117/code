let gallery = {
    currentPhoto: 0,
    photos: {
        photo001: null,
        photo002: null,
        photo003: null,
        photo004: null,
        photo005: null,
        photo006: null,
        photo007: null,
        photo008: null,
    },
    changePhoto() {
        let photos = document.querySelectorAll('.photo');
        if (this.currentPhoto > photos.length - 1) {
            this.currentPhoto = 0;
        }
        console.log(this.currentPhoto);
        if (this.currentPhoto < 0) {
            this.currentPhoto = photos.length - 1;
        }
        for (let i = 0; i <= photos.length - 1; i++) {
            photos[i].style.opacity = '0';
            console.log(this.currentPhoto);
            if (i === this.currentPhoto) {
                photos[i].style.opacity = '1';
            }
        }
        console.log(photos);
    },
    createImg() {
        let gallery = document.querySelector('.photos');
        for (let key in this.photos) {
            this.photos[key] = new Image();
            this.photos[key].src = './img/' + key + '.jpg';
            gallery.appendChild(this.photos[key]);
            this.photos[key].style.opacity = '0';
            this.photos[key].className = 'photo';
            console.log(this.photos.photo008);
            this.changePhoto();
        }
    },
    prevPhoto() {
        this.currentPhoto -= 1;
        this.changePhoto();
    },
    nextPhoto() {
        this.currentPhoto += 1;
        this.changePhoto();
    },
    navigation() {
        let prevBtn = document.querySelector('#prev-btn');
        let nextBtn = document.querySelector('#next-btn');
        console.log(prevBtn + ' ---- ' + nextBtn);
        prevBtn.addEventListener('click', () => { this.prevPhoto(); });
        nextBtn.addEventListener('click', () => { this.nextPhoto(); });
    },


    run() {
        this.createImg();
        this.navigation();
    },
};


window.addEventListener('load', function() {
    gallery.run();
    console.log('Document is load');
});