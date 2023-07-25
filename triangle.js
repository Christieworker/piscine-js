// Crée un triangle en utilisant un caractère spécifié et un nombre de lignes donné
function triangle(char, n) {
    let str = ""; // Variable pour stocker le triangle résultant

    for (var i = 1; i <= n; i++) {
        // Boucle pour itérer sur chaque ligne du triangle

        str = str + char.repeat(i) + "\n";
        // Ajoute le caractère répété i fois à la chaîne str pour former la ligne actuelle du triangle
        // Puis ajoute un saut de ligne ("\n") pour passer à la ligne suivante
    }

    return str.slice(0, -1);
    // Retourne la chaîne str en supprimant le dernier caractère (le saut de ligne final)
}
