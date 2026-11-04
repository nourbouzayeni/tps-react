// EXERCICE 4 – Affichage conditionnel avec &&

function Formation() {
  const disponible = true;
  const places = 5;

  return (
    <div>
      {/* 1. Toujours affiché */}
      <h2>React JS</h2>

      {/* 2. condition && <élément> : si la condition est vraie, l'élément est affiché ;
             si elle est fausse, React n'affiche rien. */}
      {disponible && <p>Inscriptions ouvertes</p>}

      {/* 3. Comparaison > 0 : donne un booléen (true / false) */}
      {places > 0 && <p>Il reste des places</p>}

      {/* 4. Si disponible = false, la ligne « Inscriptions ouvertes » disparaît
             automatiquement : rien à ajouter. */}
    </div>
  );
}

export default Formation;

/*
  PIÈGE : écrire {places && <p>Il reste des places</p>} afficherait « 0 » quand
  places vaut 0 (React affiche le nombre 0, contrairement à false/null/undefined).
  C'est pourquoi on écrit {places > 0 && ...}.

  Pour n'afficher « Il reste des places » que si la formation est ouverte :
  {disponible && places > 0 && <p>Il reste des places</p>}
*/
