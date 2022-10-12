/* Une fonction JavaScript merge(tab) qui affiche une chaîne de caractères = la
concaténation de tous les éléments d’un tableau tab.
exemple : myColor = ["Red", "Green", "White", "Black"];
doit produire comme résultat : "Red,Green,White,Black" et "RedGreenWhiteBlack". */

function merge(tab) {
    console.log(tab.toString());
    console.log(tab.join(''));
}

myColor = ["Red", "Green", "White", "Black"];
merge(myColor);