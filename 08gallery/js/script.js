'use strict';

const Gallery = function(selector) {
    this.root = document.querySelector(selector);
    this.images = [];
}

Gallery.prototype.init = function() {
    this.images = IMAGE_LIST;
    this.root.innerHTML = `
<div id="gallery-viewer"><img src="img/${this.images[0]}">
<div class="sort-action">
<button>&#9664;</button><button>&#9654;</button>
</div>
</div>
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
        });
    }

    const sortButtons = this.root.querySelectorAll('.sort-action button');

    const that = this;

    for (const button of sortButtons) {
        button.addEventListener('click', function(){
            // à partir de l'URL complète de l'image
            // on découpe selon les "/"
            // et on ne conserve que la dernière partie
            const imageFilename = decodeURI(viewerImage.src.split('/').pop());

            // Autre manière de faire la même chose:
            // à partir de l'URL complète de l'image
            // on cherche le premier "/" à partir de la fin "lastIndexOf"
            // et on coupe après la position de ce caractère "substring"
            const pos = viewerImage.src.lastIndexOf('/') + 1;
            const imageFilename2 = decodeURI(viewerImage.src.substring(pos));

            const currentImageIndex = that.images.indexOf(imageFilename);

            console.log(currentImageIndex, imageFilename);

            viewerImage.src = 'img/' + that.images[currentImageIndex-1];
            
        });
    }
}

const myGallery = new Gallery('#gallery');
myGallery.init();
