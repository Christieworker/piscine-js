// Joindre les éléments d'un tableau en une seule chaîne de caractères, séparés par un séparateur
function join(arr, sep) {
    if (sep === null) {
        sep = ","; // Utilisez une virgule comme séparateur par défaut si aucun séparateur n'est fourni
    }
    var result = arr[0].toString(); // Convertit le premier élément en chaîne de caractères
    for (var i = 1; i < arr.length; i++) {
        result += sep + arr[i]; // Ajoute le séparateur et l'élément actuel à la chaîne résultante
    }
    return result; // Renvoie la chaîne résultante
}

// Diviser une chaîne de caractères en un tableau en utilisant un séparateur
function split(str, sep) {
    // Divise une chaîne de caractères en utilisant un séparateur multi-caractères
    // et renvoie un tableau avec les résultats.

    if (sep === null) {
        sep = ","; // Utilisez une virgule comme séparateur par défaut si aucun séparateur n'est fourni
    }

    var result = []; // Tableau pour stocker les résultats

    if (sep === "") {
        // Si le séparateur est une chaîne vide, divise la chaîne en caractères individuels
        for (var i = 0; i < str.length; i++) {
            result.push(str[i]); // Ajoute chaque caractère à la liste des résultats
        }
        return result; // Renvoie le tableau résultant
    }

    var end = str.indexOf(sep); // Trouve la position de la première occurrence du séparateur

    while (end > -1) {
        end = str.indexOf(sep); // Trouve la position suivante du séparateur
        if (end === -1) {
            break; // Sort de la boucle si aucun autre séparateur n'est trouvé
        }
        result.push(str.slice(0, end)); // Ajoute la sous-chaîne avant le séparateur à la liste des résultats
        str = str.slice(end + sep.length); // Met à jour la chaîne en supprimant la partie déjà traitée
    }

    result.push(str); // Ajoute la partie restante de la chaîne à la liste des résultats
    return result; // Renvoie le tableau résultant
}
