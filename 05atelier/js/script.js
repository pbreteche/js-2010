'use strict';

const subMenus = document.querySelectorAll('.menu ul');
for (const subMenu of subMenus) {
    subMenu.hidden = true;
    subMenu.previousElementSibling.addEventListener('click', function(){
        console.log(this);
    });
}
