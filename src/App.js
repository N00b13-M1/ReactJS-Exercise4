// import React, {Component} from 'react';
// Exercice 4

// Créez un dossier ReactJS qui s'appelle "exercice4".
// Supprimez tous les dossiers inutiles.
// Dans le fichier App.js, supprimez tous et créer une class App avec les extends et imports nécessaires.
// Vous allez ajouter bootstrap et fontawesome dans votre exercice
// Vérifiez qu'il fonctionne bien dans votre exercice

import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <br /><br /><br /><br /><br />
        <i className="fa fa-spinner fa-spin">Spinning effect</i>
        <p className="text-center bg-danger text-primary">Test</p>
      </div>
    );
  }
}

export default App;