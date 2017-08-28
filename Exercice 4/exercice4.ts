/*
Nous souhaitons écrire une fonction permettant de
calculer la somme des chiffres contenus dans un tableau bi-dimensionnel

Notre première fonction (ci-dessous) ne donne pas le résultat escompté

1. Expliquer pourquoi
2. Proposer une correction

3. Proposer une solution avec uniquement var
4. Proposer une solution avec uniquemnet let
*/

//===================
function sommeTableau(tableau: number[][]) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
   // var ligne = tableau[i].length;
    for (var j = 0; j < tableau[i].length; j++) {
      somme += tableau[i][j];
    }
  }

  return somme;
}

// le code de test qui révèle le problème
let tab:number[][]  = [[0, 1], [2, 3]];
let total = sommeTableau(tab);
console.log(total); // outputs 1




function sommeTableau2(tableau: number[][]) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
   // var ligne = tableau[i].length;
    for (let j = 0; j < tableau[i].length; j++) {
      somme += tableau[i][j];
    }
  }

  return somme;
}

// le code de test qui révèle le problème
let tab2:number[][]  = [[0, 1], [2, 3]];
let total2 = sommeTableau2(tab2);
console.log(total2); // outputs 1



