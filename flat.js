// Applique l'opération "flatten" sur un tableau jusqu'à une certaine profondeur
function flat(arr, depth) {
    // Vérifie si l'argument est un tableau
    if (!Array.isArray(arr)) {
        return arr; // Renvoie l'argument tel quel s'il n'est pas un tableau
    }

    // Vérifie si la profondeur spécifiée est égale à zéro
    if (depth === 0) {
        return arr; // Renvoie le tableau sans modification si la profondeur est zéro
    }

    // Vérifie si la profondeur n'est pas spécifiée (undefined)
    if (depth === undefined) {
        depth = 1; // Par défaut, la profondeur est égale à 1
    }

    // Utilise la méthode "reduce" pour appliquer l'opération "flatten" récursivement
    return arr.reduce((acc, cur) => {
        return acc.concat(flat(cur, depth - 1)); // Concatène le résultat avec les éléments "flattenés" du tableau courant
    }, []); // Utilise un tableau vide comme valeur initiale de l'accumulateur
}
