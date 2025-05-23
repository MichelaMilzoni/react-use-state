import { useState } from "react";
import { handleError } from "./utils/errorHandler"; // 👈 Importa il gestore degli errori

//* importazione dei componenti
import Header from './components/Header';
import Main from './components/Main';
import FooterBottom from './components/Footer';
import Alert from "./components/Alert";

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}

export default App;