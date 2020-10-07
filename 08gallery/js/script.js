'use strict';

const Gallery = function(selector) {
    this.root = document.querySelector(selector);
    this.images = [];
    this.index = 0;
}

Gallery.prototype.init = function() {
    this.images = IMAGE_LIST;
    this.display();

    const that = this;
    const navLinks = this.root.querySelectorAll('#gallery-nav a');

    const viewerImage = this.root.querySelector('#gallery-viewer img');
    for (const link of navLinks) {
        link.addEventListener('click', function(){
            viewerImage.src = this.children[0].src;
            that.index = this.dataset.index;
        });
    }

    const sortButtons = this.root.querySelectorAll('.sort-action button');

    sortButtons[0].addEventListener('click', function() {
        if (that.index > 0) {
            that.index--;
        }
        else {
            // dernière position dans le tableau = taille - 1
            that.index = that.images.length - 1;
        }
        
        viewerImage.src = 'img/'+that.images[that.index];
    });
    sortButtons[1].addEventListener('click', function() {
        if (that.index < that.images.length - 1) {
            that.index++;
        }
        else {
            that.index = 0;
        }
        viewerImage.src = 'img/'+that.images[that.index];
    });
}

Gallery.prototype.display = function() {
    this.root.innerHTML = `
<div id="gallery-viewer"><img src="img/${this.images[this.index]}">
<div class="sort-action">
<button>&#9664;</button><button>&#9654;</button>
</div>
</div>
<nav id="gallery-nav">
    <ul>
    ${this.images.reduce(function(accumulator, image, index) {
        return `${accumulator}<li><a data-index="${index}"><img src="img/${image}"></a></li>`
    }, '')}
    </ul>
</nav>
`;
}

const myGallery = new Gallery('#gallery');
myGallery.init();
