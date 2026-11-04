// EXERCICE 1 – PARTIE B : classes CSS conditionnelles
import "./Resultat.css"; // import du fichier CSS externe

function Resultat() {
  const moyenne = 14;

  return (
    // En JSX on écrit className (et non class, mot réservé en JavaScript).
    // Le ternaire choisit le NOM de la classe : "admis" ou "refuse".
    <div className={moyenne >= 10 ? "admis" : "refuse"}>
      <h2>{moyenne >= 10 ? "Admis" : "Refusé"}</h2>
      <p>Moyenne : {moyenne}</p>
    </div>
  );
}

export default Resultat;

/*
  Avantage par rapport au style inline : le CSS est séparé de la logique,
  réutilisable et plus facile à maintenir. Le JSX ne décide que de la classe.
*/
