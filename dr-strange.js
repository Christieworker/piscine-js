// La fonction addWeek prend une Date en argument et retourne le jour de la semaine correspondant dans notre nouveau format de semaine de 14 jours.
function addWeek(date) {
    // Un objet qui associe un numéro de jour à chaque jour de la semaine, y compris le deuxième lundi, le deuxième mardi, etc.
    const secondWeek = {
        0: "Monday",
        1: "Tuesday",
        2: "Wednesday",
        3: "Thursday",
        4: "Friday",
        5: "Saturday",
        6: "Sunday",
        7: "secondMonday",
        8: "secondTuesday",
        9: "secondWednesday",
        10: "secondThursday",
        11: "secondFriday",
        12: "secondSaturday",
        13: "secondSunday",
    };
    // Convertit la date en millisecondes depuis l'époque (1er janvier 1970) et ajoute le décalage nécessaire pour correspondre à l'époque de notre nouveau format de semaine.
    let zTime = date.getTime() + 62135596800000;
    // Calcule le nombre de jours écoulés depuis l'époque de notre nouveau format de semaine, puis utilise le modulo 14 pour obtenir le jour de la semaine correspondant.
    return secondWeek[(zTime / 86400000) % 14];
}
// La fonction timeTravel prend un objet en argument et retourne une Date modifiée en fonction des informations fournies dans l'objet
function timeTravel(date) {
    // Utilise les informations fournies dans l'objet pour modifier les heures, minutes et secondes de la Date donnée.
    return new Date(date.date.setHours(date.hour, date.minute, date.second));
}
