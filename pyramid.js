// Construit une pyramide de caractères avec une hauteur spécifiée
function pyramid(char, n) {
    let str = ""; // Chaîne de caractères pour construire la pyramide
    let spaces = " ".repeat(char.length); // Chaîne d'espaces de la même longueur que le caractère

    for (var i = 1; i <= n; i++) {
        // Boucle pour chaque ligne de la pyramide, de 1 jusqu'à n inclus
        str = str + spaces.repeat(n - i) + char.repeat(2 * i - 1) + "\n";
        // Ajoute les espaces à gauche de chaque ligne (n - i fois), puis le caractère répété (2 * i - 1 fois),
        // et ajoute un saut de ligne à la fin de chaque ligne
    }

    return str.slice(0, -1);
    // Supprime le dernier saut de ligne de la chaîne construite et la renvoie
}
