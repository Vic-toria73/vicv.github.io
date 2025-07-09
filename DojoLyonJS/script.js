/**Écris une fonction appelée generateTriangle qui prend un paramètre :
n : un entier positif (représente le nombre de lignes du triangle).
La fonction doit afficher dans la console un triangle formé d'étoiles (*), 
où chaque ligne contient une étoile de plus que la précédente. */
let star = '*'
let nb = 5
function generateTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log(star.repeat(i))
  
    }
}
generateTriangle(nb)

// * = 1 ligne
// ** = 2 lignes
// *** = 3 lignes    

/**
 * .repeat(i) permet de repeter l'incrémentation
 * .padStart(n) permet d'ajouter des espaces à chaque incrémentation 
 */

function generateInvertedTriangle(n){
for (let i = 1; i <= n; i++) {
        console.log(star.repeat(i).padStart(n)) //str.padStart
  
    }
}
generateInvertedTriangle(nb)
/**
 *en inversant  le triangle, on inverse i = n; i > 0; i--
 *
 */

function generateDoubleInvertedTriangle(n) {
    for (let i = n; i > 0; i--){
        console.log(star.repeat(i).padStart(n)) 
    }
}
generateDoubleInvertedTriangle(nb)

