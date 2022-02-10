import './App.css';
import SimulatorLeft from './components/LeftFormulary';
import SimulatorRight from './components/RightFormulary';

function App() {
  return (
    <div id="root">
      <h1 className="title">Simulador de Investimentos</h1>
      <div id="left-forms-container">       
        <div id="left-forms">
          <SimulatorLeft />
          <SimulatorRight />
        </div>
      </div>
    </div>
  );
}

export default App;
