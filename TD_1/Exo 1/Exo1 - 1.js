/* Une fonction JavaScript first(tab, n) qui affiche les n premiers éléments d’un tableau
tab (prévoir tous les cas permettant de répondre aux tests ci-dessous) */

function first(tab, n) {

    if (tab == null)
        return 0;
    if (n == null)
        return tab[0];
    if (n < 0)
        return [];
    return tab.slice(0, n);
}


console.log(first([7, 9, 0, -2]));