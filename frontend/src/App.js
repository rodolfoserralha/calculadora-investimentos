import './App.css';
import React, { useContext } from 'react';
import Results from './components/Results';
import AppContext from './context/index';
import GraphicData from './components/Graphics';
import SimulatorLeft from './components/LeftFormulary';
import SimulatorRight from './components/RightFormulary';

function App() {
  const { simulateResults } = useContext(AppContext);

  return (
    <div id="root">
      <h1 className="title">Simulador de Investimentos</h1>
      <div id="left-forms-container">       
        <div id="left-forms">
          <SimulatorLeft />
          <SimulatorRight />
        </div>
        <div id="right-forms">
          { simulateResults && <Results /> }
          { simulateResults && <GraphicData />}
        </div>
      </div>
    </div>
  );
}

export default App;
