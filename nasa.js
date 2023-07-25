// Génère une chaîne de caractères selon certaines conditions
function nasa(int) {
    var result = ""; // Variable pour stocker le résultat

    for (var i = 1; i <= int; i++) {
        // Parcours de 1 à la valeur spécifiée

        if (i % 3 === 0 && i % 5 === 0) {
            // Si i est divisible par 3 et par 5
            result = result + "NASA"; // Ajoute "NASA" au résultat
        } else if (i % 3 === 0) {
            // Si i est divisible par 3 seulement
            result = result + "NA"; // Ajoute "NA" au résultat
        } else if (i % 5 === 0) {
            // Si i est divisible par 5 seulement
            result = result + "SA"; // Ajoute "SA" au résultat
        } else {
            // Si i n'est pas divisible par 3 ni par 5
            result = result + i.toString(); // Ajoute la valeur de i convertie en chaîne de caractères au résultat
        }

        if (i !== int) {
            // Si ce n'est pas la dernière itération
            result = result + " "; // Ajoute un espace au résultat pour séparer les éléments
        }
    }

    return result; // Renvoie le résultat
}
