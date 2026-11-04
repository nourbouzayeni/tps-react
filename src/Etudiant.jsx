// EXERCICE 2 – Afficher des informations dynamiques

function Etudiant() {
  // 2. Variables à afficher
  const nom = "Ahmed";
  const prenom = "Ali";
  const age = 20;
  const filiere = "Informatique";

  return (
    <div>
      <h2>Informations de l'étudiant</h2>
      {/* 3. {variable} : insère la valeur d'une expression JavaScript dans le JSX */}
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Âge : {age} ans</p>
      <p>Filière : {filiere}</p>

      {/* 4. Nom complet : plusieurs variables dans une même expression
             (ou un template literal : {`${prenom} ${nom}`}) */}
      <p>Nom complet : {prenom} {nom}</p>
    </div>
  );
}

export default Etudiant;
