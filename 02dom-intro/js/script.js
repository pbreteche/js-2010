'use strict';

// DOM
// Document Object Model
// variable document mise à disposition auto par la navigateur

// aller chercher un élément du DOM par rapport à son ID
const article = document.getElementById('article-1234');
// modifier le DOM
// accès aux propriétés via "."
article.style.color = 'blue';

// aller chercher un élément du DOM à partir de l'article
// via un sélecteur
const paragraphes = article.querySelectorAll('p');

for (const paragraphe of paragraphes) {
    paragraphe.style.color = 'green';
}

const liens = document.querySelectorAll('.menu a');

for (const lien of liens) {
    lien.addEventListener('click', function() {
        console.log('click');
    });
}
