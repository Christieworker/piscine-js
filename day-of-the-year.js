// La fonction dayOfTheYear prend une Date en argument et retourne le jour de l'année correspondant à cette date.
function dayOfTheYear(date) {
    let days = 1;
    // Tant que la date n'est pas le premier jour de janvier (isFirstofFirst), on décrémente la date d'un jour et on incrémente le compteur de jours.
    while (!isFirstofFirst(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    // Une fois que la date est le premier jour de janvier, on retourne le nombre total de jours écoulés.
    return days;
}

// La fonction isFirstofFirst vérifie si la date donnée correspond au premier jour de janvier.
function isFirstofFirst(date) {
    // Vérifie si le jour de la date est égal à 1 (premier jour du mois) et si le mois de la date est égal à 0 (janvier).
    return date.getDate() === 1 && date.getMonth() === 0;
}
