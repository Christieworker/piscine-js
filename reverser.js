// Fonction pour inverser une chaîne de caractères ou un tableau
function reverse(input) {
    if (typeof input === "string") {
        // Si l'entrée est une chaîne de caractères
        let res = ""; // Variable pour stocker le résultat inversé

        // Parcours de la chaîne de caractères de la fin vers le début
        for (let i = input.length - 1; i >= 0; i--) {
            res += input[i]; // Ajoute chaque caractère inversé à la variable résultat
        }

        return res; // Renvoie la chaîne de caractères inversée
    } else if (Array.isArray(input)) {
        // Si l'entrée est un tableau
        let res = []; // Variable pour stocker le résultat inversé

        // Parcours du tableau de la fin vers le début
        for (let i = input.length - 1; i >= 0; i--) {
            res.push(input[i]); // Ajoute chaque élément inversé à la variable résultat
        }

        return res; // Renvoie le tableau inversé
    }
}
