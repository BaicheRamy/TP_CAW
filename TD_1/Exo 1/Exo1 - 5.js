/* Une fonction JavaScript permettant de trouver l’indice de l’élément le plus fréquent
dans un tableau. */



function freq(tab){
    var mf = 1;
    var m = 0;
    var item = [];
    for (var i=0; i<tab.length; i++)
    {
        for (var j=i; j<tab.length; j++)
        {
                if (tab[i] == tab[j])
                 m++;
                if (mf<m)
                {
                  mf=m;
                  fnum = tab[i];
                }
        }
        m=0;
        
    }
    item.push(fnum);
    return item;
}

var exemple=[3, 2, 3, 2, 3, 5, 13, 22, 9, 2];

console.log(freq(exemple));

// We got a problem that in case there's two numbers with the same value.
//var tab=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];