// Déclaration de la fonction multiply qui prend deux arguments (a et b)
function multiply(a, b) {
  // Initialisation de la variable result à 0
  let result = 0;
  // Vérification si le résultat doit être négatif
  const isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);

  // Conversion de a et b en valeurs absolues pour travailler avec des nombres positifs
  a = Math.abs(a);
  b = Math.abs(b);

  // Boucle pour accumuler la valeur de a b fois
  for (let i = 0; i < b; i++) {
    result += a;
  }

  // Retourne le résultat en fonction de la positivité/négativité
  return isNegative ? -result : result;
}

// Déclaration de la fonction divide qui prend deux arguments (a et b)
function divide(a, b) {
  
  const isNegative = (a < 0 && b > 0) || (a > 0 && b < 0);
  
  a = Math.abs(a);
  b = Math.abs(b);

  let result = 0;

  // Boucle pour soustraire b de a jusqu'à ce que a devienne inférieur à b
  while (a >= b) {
    a -= b;
    result++;
  }
  return isNegative ? -result : result;
}

// Déclaration de la fonction modulo qui prend deux arguments (a et b)
function modulo(a, b) {
    return a- multiply(b, divide(a, b));
}