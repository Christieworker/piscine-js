function slice(input, start, end) {
    // Si l'argument 'end' est non défini, il est défini sur la longueur de l'entrée
    if (end === undefined) {
        end = input.length;
    }
    let res;
    // Si 'start' est inférieur à 0, on le convertit en une position relative à la fin de l'entrée
    if (start < 0) {
        start = input.length + start;
    }
    // Si 'end' est inférieur à 0, on le convertit en une position relative à la fin de l'entrée
    if (end < 0) {
        end = input.length + end;
    }
    // Si l'entrée est une chaîne de caractères
    if (typeof input === "string") {
        res = "";
        // Parcours de la chaîne de caractères de 'start' à 'end' (non inclus)
        for (let i = start; i < end; i++) {
            res += input[i];
        }
    }
    // Si l'entrée est un tableau
    if (Array.isArray(input)) {
        res = [];
        // Parcours du tableau de 'start' à 'end' (non inclus) et ajout des éléments à 'res'
        for (let i = start; i < end; i++) {
            res.push(input[i]);
        }
    }
    // Renvoie le résultat
    return res;
}