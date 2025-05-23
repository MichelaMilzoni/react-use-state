

//* importazione css
import '../styles/LanguageCard.css';

//* funzione principale
/**
 * Componente LanguageCard
 * @param {Object} props - Proprietà del componente
 * @param {Object} props.selectedLanguage - Lingua selezionata da visualizzare
 */
function LanguageCard({ selectedLanguage }) {
  return (
      <div className="card">
        {selectedLanguage ? (
          <>
            <h2>{selectedLanguage.title}</h2>
            <p>{selectedLanguage.description}</p>
          </>
        ) : (
          <p>Seleziona un linguaggio per visualizzarne i dettagli.</p> // Messaggio predefinito
        )}
      </div>
    );
}

export default LanguageCard;