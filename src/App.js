import './App.css';
import FormComponens from './komponensek/FormComponens.js';


function App() {

  function adatkuld(adat) {
    console.log(adat.obj);
    //it fküldjük a backend felé
    //dataservice

  }

  return (
    <div className="App">
      <header className="App-header">
        Űrlap
      </header>
      <article><FormComponens adatkuld={adatkuld}/></article>
    </div>
  );
}

export default App;
