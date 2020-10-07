// définition classique de fonction
const carre1 = function (x) {
    return x * x;
}

// définition de fonction "fléchée"
const carre2 = x => x * x;

// si nombre de param différent de 1, on met des parenthèses
const sum = (x, y) => x + y;
const hello = () => 'hello';

// si nombre d'instruction différent de 1, on met les accolades
// le return n'est alors plus automatique
const demo1 = x => {
    x++;
    return x *= 2;
}

// possibilité de mettre des parenthèses si l'expression commence par un "{"
// pour différencier accolade d'objet litéral et bloc d'instructions
const contact = (nom, email) => ({nom: nom, email: email})

// pas de création de "SCOPE" !!
