// La fonction countLeapYears prend une date en argument et retourne le nombre d'années bissextiles entre l'année 1 et l'année de la date donnée.
function countLeapYears(date) {
    let years = 0;
    
    // La boucle parcourt chaque année de l'année 1 jusqu'à l'année précédant l'année de la date donnée.
    for (let year = 1; year < date.getFullYear(); year++) {
        
        // Vérifie si l'année est divisible par 4 et si elle n'est pas divisible par 100 (sauf si elle est également divisible par 400).
        // C'est la règle pour déterminer si une année est bissextile.
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            years++; // Si l'année est bissextile, on incrémente le compteur d'années bissextiles.
        }
    }
    
    return years; // Retourne le nombre d'années bissextiles.
}
