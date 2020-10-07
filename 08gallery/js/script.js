'use strict';

const Gallery = function(selector) {
    this.root = document.querySelector(selector);
    this.images = [];
    this.index = 0;
}

Gallery.prototype.init = function() {
    this.images = IMAGE_LIST;
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


    for (const button of sortButtons) {
        button.addEventListener('click', function(){
            that.index--; // that.index = that.index - 1
            viewerImage.src = 'img/'+that.images[that.index];
        });
    }
}

const myGallery = new Gallery('#gallery');
myGallery.init();
