// La fonction isValid vérifie si une date est valide.
function isValid(date) {
    // Convertit la date en objet Date et vérifie si la représentation en chaîne de caractères est "Invalid Date".
    // Si c'est le cas, cela signifie que la date est invalide.
    if (new Date(date).toString() === "Invalid Date") {
        return false;
    }
    
    // Vérifie si la date n'est ni une instance de Date, ni un nombre.
    // Si c'est le cas, cela signifie que la date est invalide.
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }
    
    // Si aucune des conditions précédentes n'est remplie, cela signifie que la date est valide.
    return true;
}

// La fonction isAfter vérifie si la première date est postérieure à la deuxième date.
function isAfter(d1, d2) {
    // Compare les deux dates en utilisant l'opérateur de comparaison ">".
    // Si la première date est supérieure à la deuxième date, la fonction retourne true.
    if (d1 > d2) {
        return true;
    }
    
    // Si la première date n'est pas supérieure à la deuxième date, la fonction retourne false.
    return false;
}

// La fonction isBefore vérifie si la deuxième date est postérieure à la première date.
function isBefore(d1, d2) {
    // Compare les deux dates en utilisant l'opérateur de comparaison "<".
    // Si la deuxième date est supérieure à la première date, la fonction retourne true.
    if (d1 < d2) {
        return true;
    }
    
    // Si la deuxième date n'est pas supérieure à la première date, la fonction retourne false.
    return false;
}

// La fonction isFuture vérifie si une date est valide et si elle est dans le futur par rapport à la date actuelle.
function isFuture(date) {
    // Vérifie si la date est invalide en utilisant la fonction isValid.
    // Si la date est invalide, la fonction retourne false.
    if (!isValid(date)) {
        return false;
    }
    
    // Compare la date donnée avec la date actuelle (obtenue en utilisant Date.now()) en utilisant l'opérateur de comparaison ">".
    // Si la date donnée est postérieure à la date actuelle, la fonction retourne true.
    if (new Date(date).getTime() > Date.now()) {
        return true;
    }
    
    // Si la date donnée n'est pas postérieure à la date actuelle, la fonction retourne false.
    return false;
}

// La fonction isPast vérifie si une date est valide et si elle est dans le passé par rapport à la date actuelle.
function isPast(date) {
    // Vérifie si la date est invalide en utilisant la fonction isValid.
    // Si la date est invalide, la fonction retourne false.
    if (!isValid(date)) {
        return false;
    }
    
    // Compare la date donnée avec la date actuelle (obtenue en utilisant Date.now()) en utilisant l'opérateur de comparaison "<".
    // Si la date donnée est antérieure à la date actuelle, la fonction retourne true.
    if (new Date(date).getTime() < Date.now()) {
        return true;
    }
    
    // Si la date donnée n'est pas antérieure à la date actuelle, la fonction retourne false.
    return false;
}
