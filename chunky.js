// Divise un tableau en plusieurs sous-tableaux de la taille spécifiée
function chunk(arr, size) {
    var result = []; // Tableau pour stocker les sous-tableaux résultants

    for (var i = 0; i < arr.length; i += size) {
        // Parcourt le tableau par incréments de la taille spécifiée
        result.push(arr.slice(i, i + size));
        // Utilise la méthode slice pour extraire une partie du tableau à chaque itération
        // et la stocke dans le tableau résultant
    }

    return result; // Renvoie le tableau résultant contenant les sous-tableaux
}
