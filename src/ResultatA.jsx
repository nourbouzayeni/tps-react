// EXERCICE 1 – PARTIE A : opérateur ternaire + style conditionnel (inline)

function ResultatA() {
  // 2. Variable moyenne initialisée à 14
  const moyenne = 14;

  // Condition calculée une seule fois, réutilisée plusieurs fois
  const admis = moyenne >= 10;

  // 4. Objet de style : en React, les propriétés CSS s'écrivent en camelCase
  //    (background-color -> backgroundColor) et les valeurs sont des chaînes.
  //    Ternaire : condition ? valeurSiVrai : valeurSiFaux
  const style = {
    color: admis ? "green" : "red",
    backgroundColor: admis ? "#dcfce7" : "#fee2e2", // vert clair / rouge clair
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    // style={{ ... }} : les premières accolades = expression JSX,
    // les secondes = objet JavaScript. Ici on passe l'objet défini plus haut.
    <div style={style}>
      {/* 3. Message : ternaire directement dans le JSX */}
      <h2>{admis ? "Admis" : "Refusé"}</h2>
      {/* 5. Affichage de la moyenne */}
      <p>Moyenne : {moyenne}</p>
    </div>
  );
}

export default ResultatA;

/*
  QUESTION : Que se passe-t-il si on remplace 14 par 8 ?
  -> 8 >= 10 est false, donc admis vaut false.
  -> Le message devient « Refusé », le texte passe au rouge et le fond au rouge clair.
  -> Aucune autre modification n'est nécessaire : l'affichage dépend uniquement de la valeur.
*/
