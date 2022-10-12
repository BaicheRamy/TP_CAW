/* Une fonction JavaScript last(tab, n) qui affiche les n derniers éléments d’un tableau
tab (prévoir tous les cas permettant de répondre aux tests ci-dessous) */

function last(tab, n) {
    m = tab.length;
    if (n == null)
        return tab[m - 1];
    if (n > m)
        return tab;
    return tab.slice(m - n, m);
}

console.log(last([7, 9, 0, -2], 3));