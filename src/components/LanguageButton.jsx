

//* importazione css
import '../styles/LanguageButton.css';

//* funzione principale
/**
 * Componente LanguageButton
 * @param {Object} props - Proprietà del componente
 * @param {Object} props.language - Lingua da visualizzare
 * @param {Function} props.onSelect - Funzione da chiamare quando il pulsante viene cliccato
 */

function LanguageButton({ language, onSelect }) {
  return (
    <button onClick={() => onSelect(language)}>{language.title}</button>
  );
}


//* esportazione del componente Main
export default LanguageButton;