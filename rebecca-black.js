// Vérifie si la date donnée est un vendredi.
function isFriday(date) {
    // Récupère le jour de la semaine de la date donnée (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi) et compare à 5 (vendredi).
    return new Date(date).getDay() === 5;
}

// Vérifie si la date donnée est un jour de week-end (samedi ou dimanche).
function isWeekend(date) {
    // Récupère le jour de la semaine de la date donnée (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi) et vérifie si c'est un jour de week-end.
    var day = new Date(date).getDay();
    return day === 0 || day === 6;
}

// Vérifie si l'année de la date donnée est bissextile.
function isLeapYear(date) {
    // Récupère l'année de la date donnée.
    var year = new Date(date).getFullYear();
    // Vérifie si l'année est divisible par 4 et non divisible par 100, ou si elle est divisible par 400 (règles des années bissextiles).
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Vérifie si la date donnée est le dernier jour du mois.
function isLastDayOfMonth(date) {
    var d = new Date(date);
    // Crée une nouvelle date correspondant au premier jour du mois suivant, puis récupère le jour précédent (dernier jour du mois actuel).
    return (
        new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate() === d.getDate()
    );
}
