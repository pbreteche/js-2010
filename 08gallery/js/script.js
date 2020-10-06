'use strict';

const Gallery = function(selector) {
    this.root = document.querySelector(selector);
}

Gallery.prototype.init = function() {
    this.root.innerHTML = `
<div id="gallery-viewer"><img src=""></div>
<nav>
    <ul>
    <li></li>
    </ul>
</nav>
`
}

const myGallery = new Gallery('#gallery');
