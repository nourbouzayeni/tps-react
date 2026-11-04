import ResultatA from "./ResultatA";
import Resultat from "./Resultat";
import Etudiant from "./Etudiant";
import Budget from "./Budget";
import Formation from "./Formation";

function App() {
  return (
    <div style={{ maxWidth: 600, margin: "20px auto", fontFamily: "sans-serif" }}>
      <h1>TP 2 – Initiation React</h1>

      <h2>Exercice 1 – Partie A (ternaire + style inline)</h2>
      <ResultatA />

      <h2>Exercice 1 – Partie B (classes CSS)</h2>
      <Resultat />

      <h2>Exercice 2</h2>
      <Etudiant />

      <h2>Exercice 3</h2>
      <Budget />

      <h2>Exercice 4</h2>
      <Formation />
    </div>
  );
}

export default App;

/*
  Mise en place (Vite) :
    npm create vite@latest tp2-react -- --template react
    cd tp2-react && npm install
    -> copier les fichiers de ce dossier dans src/ (remplacer App.jsx)
    npm run dev
*/