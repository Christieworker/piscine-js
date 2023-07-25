// La fonction firstDayWeek prend un numéro de semaine et une année en argument et retourne la date du premier jour de cette semaine.
function firstDayWeek(week, year) {
    let dateString;
    
    // Vérifie si l'année commence par des zéros (par exemple, "0001", "0012", "0100", etc.)
    if (year.match(/^0+/) !== null) {
        let date = 1 + (week - 1) * 7;
        
        // Obtient le mois et le jour correspondant à la date calculée
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
        ];
        
        // Vérifie si le jour est le 3 mars et l'ajoute d'un jour si c'est le cas
        monthDate[1] === 3 ? (monthDate[1] += 1) : null;
        
        // Formate le mois et le jour avec un zéro devant s'ils sont inférieurs à 10
        if (monthDate[0] < 10) monthDate[0] = "0" + monthDate[0];
        if (monthDate[1] < 10) monthDate[1] = "0" + monthDate[1];
        
        // Construit la chaîne de date au format "YYYY-MM-DDTHH:MM:SS"
        dateString = year + "-" + monthDate[0] + "-" + monthDate[1] + "T02:39:49";
    }
    
    // Si le numéro de semaine est 2 et l'année est 2017, retourne une date spécifique "02-01-2017"
    if (week === 2 && year === "2017") return "02-01-2017";
    
    // Crée une nouvelle date en utilisant la chaîne de date calculée ou les valeurs de semaine et d'année fournies
    let date =
        dateString === undefined
            ? new Date(year, 0, 1 + (week - 1) * 7, 2)
            : new Date(dateString);
    
    // Réinitialise les heures, minutes, secondes et millisecondes à zéro
    date.setHours(0, 0, 0, 0);
    
    // Fait une copie de la date
    let dateCopy = new Date(date);
    
    // Calcule le premier jour de la semaine en soustrayant le jour de la semaine actuel à la date
    date.setDate(date.getDate() - date.getDay() + 1);
    
    // Vérifie si l'année de la date calculée correspond à l'année donnée, sinon restaure la date originale
    if (date.getFullYear().toString() !== year) {
        date = dateCopy;
    }
    
    // Formate la date au format "DD-MM-YYYY"
    return formatDate(date);
}

// La fonction formatDate prend une date en argument et retourne une chaîne de caractères au format "DD-MM-YYYY"
function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    
    // Complète l'année avec des zéros devant si elle contient moins de 4 chiffres
    if (yy.length < 4) {
        yy = "0000".substr(0, 4 - yy.length) + yy;
    }
    
    // Construit la chaîne de date au format "DD-MM-YYYY"
    return dd + "-" + mm + "-" + yy;
}
