// Génère toutes les partitions entières d'un nombre donné
function sums(n) {
    if (n < 2) return []; // Si le nombre est inférieur à 2, il n'y a pas de partition possible, donc on retourne un tableau vide

    var partitions = [], // Tableau pour stocker toutes les partitions
        current = []; // Tableau pour stocker la partition actuelle en cours de construction

    // Fonction pour ajouter la partition actuelle au tableau des partitions
    function addPartition() {
        partitions.push(current.slice()); // On utilise slice() pour créer une copie de la partition actuelle et l'ajouter au tableau des partitions
    }

    // Fonction récursive pour générer les partitions
    function findPartitions(start, remaining) {
        if (remaining === 0) {
            // Si le nombre restant à partitionner est 0, cela signifie que la partition est complète, donc on l'ajoute au tableau des partitions
            addPartition();
        } else {
            for (var i = start; i <= remaining; i++) {
                // On parcourt tous les nombres à partir du nombre de départ jusqu'au nombre restant
                current.push(i); // On ajoute le nombre actuel à la partition en cours de construction
                findPartitions(i, remaining - i); // On appelle récursivement la fonction pour trouver les partitions avec le nombre actuel soustrait du nombre restant
                current.pop(); // Une fois la récursion terminée, on retire le dernier nombre ajouté à la partition en cours de construction
            }
        }
    }

    findPartitions(1, n); // On appelle la fonction récursive pour générer les partitions à partir de 1 jusqu'au nombre donné

    return partitions.slice(0, -1); // On retourne toutes les partitions générées, sauf la dernière qui est vide
}
