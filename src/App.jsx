import { useState } from "react";
import languages from "./assets/data/languages.js"; // importazione dei dati

//* importazione dei componenti
import LanguageButton from './components/LanguageButton';
import LanguageCard from './components/LanguageCard';

//* importazione CSS
import './styles/App.css';

//* funzione principale

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[null]); // Mostra il primo di default

  return (
    <div className="container">
      <h1>Seleziona un linguaggio</h1>

      <div className="button-container">
        {languages.map((lang) => (
          <LanguageButton 
            key={lang.id}
            language={lang}
            onSelect={setSelectedLanguage} 
            isActive={selectedLanguage && selectedLanguage.id === lang.id}
          />
        ))}
      </div>

      <LanguageCard selectedLanguage={selectedLanguage} />
    </div>
  );
}

export default App;