// Cette fonction découpe la chaîne de caractères en enlevant les deux premiers caractères
function cutFirst(str) {
    return str.slice(2);
}

// Cette fonction découpe la chaîne de caractères en enlevant les deux derniers caractères
function cutLast(str) {
    return str.slice(0, -2);
}

// Cette fonction découpe la chaîne de caractères en enlevant les deux premiers et les deux derniers caractères
function cutFirstLast(str) {
    return str.slice(2, -2);
}

// Cette fonction conserve uniquement les deux premiers caractères de la chaîne de caractères
function keepFirst(str) {
    return str.slice(0, 2);
}

// Cette fonction conserve uniquement les deux derniers caractères de la chaîne de caractères
function keepLast(str) {
    return str.slice(-2);
}

// Cette fonction conserve les deux premiers et les deux derniers caractères de la chaîne de caractères,
// à moins que la longueur de la chaîne soit inférieure ou égale à 3, auquel cas la chaîne complète est renvoyée.
function keepFirstLast(str) {
    if (str.length <= 3) {
        return str;
    }
    return str.slice(0, 2) + str.slice(-2);
}
