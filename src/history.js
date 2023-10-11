import React from 'react';
import { useHistory } from 'react-router-dom';
function MonComposant() {
    const history = useHistory();
  
    // Fonction pour gérer la navigation vers le nouveau lien
    const naviguerVersNouveauLien = () => {
      const nouveauLien = '/pages/Pages2'; // Remplacez par le lien que vous souhaitez
      history.push('/pages/Pages2');
    };
  
    return (
      <div>
        {/* Votre contenu de composant */}
        <button onClick={naviguerVersNouveauLien}>Aller vers le nouveau lien</button>
      </div>
    );
  }
  
  export default MonComposant; // N'oubliez pas d'exporter le composant