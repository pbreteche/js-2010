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

    const browseButton = this.root.querySelectorAll('.sort-action button');

    browseButton[0].addEventListener('click', function() {
        that.previous(viewerImage);
    });
    browseButton[1].addEventListener('click', function() {
        that.next(viewerImage);
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

Gallery.prototype.previous = function(targetImage) {
    if (this.index > 0) {
        this.index--;
    }
    else {
        this.index = this.images.length - 1;
    }
    
    targetImage.src = 'img/'+this.images[this.index];
}

Gallery.prototype.next = function(targetImage) {
    if (this.index < this.images.length - 1) {
        this.index++;
    }
    else {
        this.index = 0;
    }
    targetImage.src = 'img/'+this.images[this.index];
}



const myGallery = new Gallery('#gallery');
myGallery.init();
