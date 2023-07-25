// La fonction `indexOf` retourne l'index de la première occurrence de l'élément dans le tableau
// Si l'élément n'est pas trouvé, elle retourne -1
function indexOf(arr, item, index) {
    for (var i = index || 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

// La fonction `lastIndexOf` retourne l'index de la dernière occurrence de l'élément dans le tableau
// Si l'élément n'est pas trouvé, elle retourne -1
function lastIndexOf(arr, item, index) {
    for (var i = index || arr.length - 1; i >= 0; i--) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
}

// La fonction `includes` vérifie si un élément est présent dans le tableau
// Elle utilise la fonction `indexOf` pour effectuer cette vérification
// Elle retourne `true` si l'élément est présent, sinon elle retourne `false`
function includes(arr, item, index) {
    return indexOf(arr, item, index) !== -1;
}