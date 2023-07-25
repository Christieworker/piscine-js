// Arrondit un nombre entier
function round(int) {
    let neg = false; // Variable pour suivre si le nombre est négatif

    if (int < 0) {
        neg = true; // Le nombre est négatif, on garde la trace
        int = -int; // On convertit le nombre en positif pour faciliter l'arrondi
    }

    let counter = 0; // Compteur pour suivre le nombre de fois que l'on soustrait 1

    while (!(int < 1 && int > -1)) {
        int -= 1; // Soustrait 1 du nombre
        counter++; // Incrémente le compteur
    }

    if (int < 0.5) {
        // Si la partie décimale est inférieure à 0.5
        if (neg) {
            return -counter; // On renvoie le nombre arrondi négatif
        } else {
            return counter; // On renvoie le nombre arrondi positif
        }
    } else {
        // Si la partie décimale est supérieure ou égale à 0.5
        if (neg) {
            return -counter - 1; // On renvoie le nombre arrondi négatif
        } else {
            return counter + 1; // On renvoie le nombre arrondi positif
        }
    }
}

// Retourne la partie entière inférieure ou égale d'un nombre
function floor(int) {
    let neg = false; // Variable pour suivre si le nombre est négatif

    if (int < 0) {
        neg = true; // Le nombre est négatif, on garde la trace
        int = -int; // On convertit le nombre en positif pour faciliter le calcul
    }

    let intCopy = int; // Copie du nombre initial
    let counter = 0; // Compteur pour suivre le nombre de fois que l'on soustrait 1

    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1; // Soustrait 1 du nombre copié
        counter++; // Incrémente le compteur
    }

    if (neg) {
        return -counter - 1; // On renvoie la partie entière inférieure ou égale négative
    } else {
        return counter; // On renvoie la partie entière inférieure ou égale positive
    }
}

// Retourne la partie entière supérieure ou égale d'un nombre
function ceil(int) {
    if (!int) return 0; // Si le nombre est 0 ou vide, on renvoie 0

    let neg = false; // Variable pour suivre si le nombre est négatif

    if (int < 0) {
        neg = true; // Le nombre est négatif, on garde la trace
        int = -int; // On convertit le nombre en positif pour faciliter le calcul
    }

    let intCopy = int; // Copie du nombre initial
    let counter = 0; // Compteur pour suivre le nombre de fois que l'on soustrait 1

    while (!(intCopy < 1 && intCopy >= 0)) {
        intCopy -= 1; // Soustrait 1 du nombre copié
        counter++; // Incrémente le compteur
    }

    if (neg) {
        return -counter; // On renvoie la partie entière supérieure ou égale négative
    } else {
        return counter + 1; // On renvoie la partie entière supérieure ou égale positive
    }
}

// Retourne la partie entière d'un nombre en supprimant la partie décimale
function trunc(int) {
    let counter = 0; // Compteur pour suivre le nombre de fois que l'on soustrait 1

    if (int > 0xfffffffff) {
        int -= 0xfffffffff; // Soustrait la valeur maximale pour gérer les entiers trop grands
        counter += 0xfffffffff; // Incrémente le compteur avec la valeur maximale
    }

    let neg = false; // Variable pour suivre si le nombre est négatif

    if (int < 0) {
        neg = true; // Le nombre est négatif, on garde la trace
        int = -int; // On convertit le nombre en positif pour faciliter le calcul
    }

    let intCopy = int; // Copie du nombre initial

    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1; // Soustrait 1 du nombre copié
        counter++; // Incrémente le compteur
    }

    if (neg) {
        return -counter; // On renvoie la partie entière tronquée négative
    }

    return counter; // On renvoie la partie entière tronquée positive
}
