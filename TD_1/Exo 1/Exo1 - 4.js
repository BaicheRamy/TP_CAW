/* Une fonction JavaScript permettant de diviser un tableau en plusieurs sous tableaux
de taille prédéfinie.*/

function divide(tab, n) {
    const res = []

    while (tab.length > 0) {
        const chunk = tab.splice(0, n);
        res.push(chunk)

    }
    return res;

    // return tab.slice(n,m)

}

console.log(divide([1, 2, 3, 4, 5, 6, 7], 8));