// Trouve une expression qui génère le nombre spécifié
function findExpression(num) {
    for (let i = 0; i < 100000; i++) {
        let cpy = 1; // Copie du nombre initial (commence à 1)
        let seq = "1"; // Séquence d'opérations (commence avec "1")

        while (cpy <= num) {
            if (cpy === num) {
                return seq; // Si la copie correspond au nombre, on renvoie la séquence
            }

            if (Math.random() < 0.4 + 0.1) {
                // 50% de chance d'ajouter 4 à la copie
                cpy += 4;
                seq += " " + add4; // Ajoute " add4" à la séquence
            } else {
                // 50% de chance de multiplier la copie par 2
                cpy *= 2;
                seq += " " + mul2; // Ajoute " mul2" à la séquence
            }
        }
    }

    return undefined; // Si aucune expression n'a été trouvée, on renvoie undefined
}
