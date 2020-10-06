'use strict';

const Gallery = function(selector) {
    this.root = document.querySelector(selector);
    this.images = [];
}

Gallery.prototype.init = function() {
    this.images = IMAGE_LIST;
    this.root.innerHTML = `
<div id="gallery-viewer"><img src="img/${this.images[0]}"></div>
<nav id="gallery-nav">
    <ul>
    ${this.images.reduce(function(accumulator, image) {
        return `${accumulator}<li><a><img src="img/${image}"></a></li>`
    }, '')}
    </ul>
</nav>
`;

    const navLinks = this.root.querySelectorAll('#gallery-nav a');

    const viewerImage = this.root.querySelector('#gallery-viewer img');
    for (const link of navLinks) {
        link.addEventListener('click', function(){
            viewerImage.src = this.children[0].src;
        })
    }
}

const myGallery = new Gallery('#gallery');
myGallery.init();
