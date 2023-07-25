// Obtient la valeur d'une propriété d'un objet en utilisant un chemin d'accès
function get(src, path) {
    // Sépare le chemin d'accès en segments individuels basés sur le caractère '.'
    return path.split(".").reduce(function (obj, key) {
        // Utilise la méthode reduce pour itérer sur chaque segment du chemin d'accès
        // L'argument 'obj' représente l'objet actuel sur lequel on itère
        // L'argument 'key' représente le segment de chemin d'accès actuel

        // Vérifie si l'objet est indéfini (ou null)
        if (obj === undefined) {
            return undefined; // Si oui, retourne undefined (valeur non trouvée)
        }

        return obj[key]; // Retourne la valeur de la propriété correspondant au segment de chemin d'accès
    }, src); // L'argument 'src' est l'objet source à partir duquel on commence la recherche
}
