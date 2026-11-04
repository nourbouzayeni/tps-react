// EXERCICE 3 – Utiliser les conditions

function Budget() {
  const budget = 1500;

  // Dans le JSX on ne peut pas écrire un if/else directement : on calcule
  // donc le message AVANT le return. L'ordre des tests compte : on commence
  // par le seuil le plus élevé (si on testait >= 1000 d'abord, 2500 donnerait « économique »).
  let message;
  if (budget >= 2000) {
    message = "Voyage premium";
  } else if (budget >= 1000) {
    message = "Voyage économique";
  } else {
    message = "Budget insuffisant";
  }

  return (
    <div>
      <p>Budget : {budget} DT</p>
      <h3>{message}</h3>
    </div>
  );
}

export default Budget;

/*
  Variante : ternaires imbriqués directement dans le JSX
  {budget >= 2000 ? "Voyage premium"
    : budget >= 1000 ? "Voyage économique"
    : "Budget insuffisant"}
  (plus compact mais moins lisible dès qu'il y a plus de 2 cas)

  Résultat avec budget = 1500 : « Voyage économique ».
*/
