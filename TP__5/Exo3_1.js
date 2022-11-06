/**
 * a. Écrire un programme JavaScript (exécuté par node) qui joue le même rôle que la
 *   commande grep. Il traite le premier argument comme expression régulière et traite
 *   les autres arguments comme des fichiers où sera recherchée l’expression régulière.
 *   Ce programme doit donner comme résultat les noms des fichiers dont le contenu
 *   correspond à l’expression régulière fournie (ou “NONE” si aucun fichier ne
 *   contient l’expression).
 */

var fs = require('fs');



const myArgs = process.argv.slice(2);
const regular = new RegExp(myArgs[0]);
const paragraph = fs.readFileSync(myArgs[1]).toString()


console.log(myArgs[0], 'is your text');
if (paragraph.match(regular) == null) {
    console.log('Sorry, I did not find it in any file.');

} else {
    console.log('this text found on ' + myArgs[1]);

}