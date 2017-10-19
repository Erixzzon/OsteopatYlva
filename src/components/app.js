import _ from 'lodash';
import React, {Component} from 'react';

import Navbar from './navbar';
import Panel from './panel';

const Texts =  [
  {
    title: "Vad gör en osteopat",
    body: "Osteopater använder en bred repertoar av mjuka manuella tekniker för att förbättra kroppens funktion. Innan behandling är det viktigt att hitta orsaken till besvären och osteopater använder sina händer för att undersöka var i kroppen det finns obalanser och restriktioner. Genom att förbättra funktionen påverkas bl.a cirkulationen, det lymfatiska systemet och nervsystemet så att kroppens självläkning kan fungera optimalt. Behandlingen sker utifrån varje persons individuella förutsättningar för att skapa det bästa möjliga utgångsläget för hälsa och välmående. Osteopaten kan också ge råd om träning, kost och andra livstilsfaktorer som påverkar hälsan."
  },
  {
    title: "När kan man få hjälp av en osteopat?",
    body: "Osteopater kan behandla personer i alla åldrar från barn till äldre. Dock är det i Sverige för närvarande inte tillåtet att behandla barn under åtta år. Osteopater är tränade att behandla personer med olika typer av besvär. Det kan vara akuta besvär i samband med skador eller långvarig smärta orsakad av arbetsrelaterad stress och överbelastning. Några exempel är: rygg- och nackbesvär, ischias, huvudvärk, migrän, yrsel, andnings- och matsmältningsbesvär, premenstruella smärtor, sträckningar, muskel- och ledvärk, tennisarmbåge, idrottsskador, förslitningsskador och stress."
  },
  {
    title: "Utbildning",
    body: "Ylva Eriksson är diplomerad osteopat och har en 5-årig utbildning från SCOM, Stockholm College of Osteopathic Medicine, som i sin tur är kvalitetssäkrade av BCOM som bedriver osteopatutbildning i England och godkända av GOsC – General Osteopathic Council."
  }
];

class App extends Component{

  render(){
    return (
      <div>
        <Navbar />

        <div className="col-md-12 brand">
            <h1 className="pull-center"><strong>Ylva Eriksson</strong></h1>
            <p className="lead pull-center">Osteopat</p>
            <a className="btn btn-success" href="https://www.bokadirekt.se/places/osteopat-ylva-eriksson-18709">Boka tid</a>
        </div>

        <div className="panels">
          {Texts.map((text,i) => {
            return (<Panel data={text} key={i}/>)
          })}
        </div>
      </div>
    );
  }
}

export default App;
