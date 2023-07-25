function matchCron(inputCron, date) {
    let cron = {}; // Initialise un objet vide pour stocker les valeurs des parties de l'inputCron.
    
    inputCron.split(" ").forEach((part, i) => {
        // Divise l'inputCron en parties distinctes en utilisant l'espace comme séparateur, puis boucle sur chaque partie avec son index (i).
        
        if (part === "*") return; // Si la partie est "*", ignore et passe à la prochaine itération.
        
        switch (i) {
            // Utilise l'index (i) pour déterminer quelle partie de l'inputCron correspond à chaque propriété de l'objet cron.
            case 0:
                cron.minute = part; // Assigne la partie à la propriété "minute" de l'objet cron.
                break;
            case 1:
                cron.hour = part; // Assigne la partie à la propriété "hour" de l'objet cron.
                break;
            case 2:
                cron.date = part; // Assigne la partie à la propriété "date" de l'objet cron.
                break;
            case 3:
                cron.month = part; // Assigne la partie à la propriété "month" de l'objet cron.
                break;
            case 4:
                cron.day = part; // Assigne la partie à la propriété "day" de l'objet cron.
                break;
        }
    });
    
    date = {
        // Crée un nouvel objet "date" contenant les valeurs des minutes, heures, jours du mois, mois et jours de la semaine de l'objet "date" fourni en argument.
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };
    
    for (let key in cron) {
        // Boucle sur chaque propriété de l'objet cron.
        
        if (cron[key] !== date[key].toString()) {
            // Vérifie si la valeur de chaque propriété de l'objet cron correspond à la valeur correspondante de la propriété dans l'objet date. Si elles ne correspondent pas, retourne false.
            return false;
        }
    }
    
    return true; // Si toutes les valeurs correspondent, retourne true.
}
