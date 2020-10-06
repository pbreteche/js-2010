'use strict';

const subMenus = document.querySelectorAll('.menu ul');
// variable pour savoir si sous menu déjà ouvert
let openSubMenu = null;

for (const subMenu of subMenus) {
    subMenu.hidden = true;
    subMenu.previousElementSibling.addEventListener('click', function(){
        // Si il existe un sous-menu ouvert
        // ET il s'agit d'un autre sous-menu
        if (openSubMenu && openSubMenu !== subMenu) {
            // masque le sous-menu
            openSubMenu.hidden = true;
        }
        subMenu.hidden = !subMenu.hidden;
        openSubMenu = !subMenu.hidden ? subMenu : null;
        // opérateur ternaire:
        // condition ? valeur_si_vrai : valeur_si_faux
    });

    subMenu.previousElementSibling.addEventListener('click2', function(){
        const openSubMenuBis = findOpenSubmenu();
        if (openSubMenuBis && openSubMenuBis !== subMenu) {
            openSubMenuBis.hidden = true;
        }
        subMenu.hidden = !subMenu.hidden;
    });
}

const findOpenSubmenu = function() {
    for (const subMenu of subMenus) {
        if (!subMenu.hidden) {
            return subMenu;
        }
    }
    return null;
}