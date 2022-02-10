import React, { useContext } from 'react';
import check from '../images/check-solid.svg'
import infocircle from '../images/info-circle-solid (1).svg';
import AppContext from '../context';

export default function SimulatorRight() {
  const { initialMonthlyContribution, setInitialMonthlyContribution, 
    profitability, setProfitability, cdi, index, setIndex, checkIcon,
    setCheckIcon, setSimulate, income, setSimulateResults } = useContext(AppContext);

  function handleChange({target}) {
    setInitialMonthlyContribution(target.value)
  }

  function verifyBtn({ target }) {
    setIndex(target.value);
    setCheckIcon(`${target.value} checkicon`) 
  }

  async function fetchApi() {
    const result = await fetch(`http://localhost:3000/simulacoes?tipoIndexacao=${index}&tipoRendimento=${income}`)
      .then((res) => res.json())
      .then((data) => data)
      .catch(error => console.error('Unable to get items.', error));
    return result[0];
  }

  async function handleClick() {
    setSimulate(true)

  const resultsApi = await fetchApi();
    setSimulateResults(resultsApi);
  }

  return (
    <div className="forms-container">
      <div id="white-space-div"></div>
      <div className="input-container">
        <div id="income-container">
          <p className="span-name">Tipos de indexação</p>
          <img id="icon" src={ infocircle } alt="img" />
        </div>
        <div className="up-btns">
          <button
            className={ index === 'pre' ? 'pre-btn checked' : 'pre-btn' }
            type="button"
            onClick={ verifyBtn }
            value="pre"
          >
            { checkIcon === 'pre checkicon' ? <img className="check-icon" src={ check } alt="check-icon" /> : null}
            PRÉ
          </button>
          <button
            className={ index === 'pos' ? 'pos checked' : 'pos' }
            type="button"
            onClick={ verifyBtn }
            value="pos"
          >
            { checkIcon === 'pos checkicon' ? <img className="check-icon" src={ check } alt="check-icon" /> : null}
            POS
          </button>
          <button
            className={ index === 'fixado' ? 'fix-btn checked' : 'fix-btn' }
            type="button"
            onClick={ verifyBtn }
            value="fixado"
          >
            { checkIcon === 'fixado checkicon' ? <img className="check-icon" src={ check } alt="check-icon" /> : null}
            FIXADO
          </button>
        </div>
      </div>
      <div className="input-container">
        <p className="span-name">Aporte Mensal</p>
        <label id="label-initial" htmlFor="initial-input">R$</label>
        <input
          id="name-input"
          className="initial-input"
          type="number"
          value={ initialMonthlyContribution }
          onChange={ handleChange }
          step="0.01"
        />
      </div>

      <div className="input-container">
        <p className="span-name">Rentabilidade (em porcentagem)</p>
        <input
          id="probability-input"
          className="inputs"
          type="number"
          value={ profitability }
          onChange={ ({ target }) => setProfitability(target.value) }
          min="1"
          max="200"
        />
      </div>

      <div className="input-container">
        <p className="span-name">CDI (ao ano)</p>
        <input
          id="name-input"
          className="inputs"
          type="text"
          value={ cdi }
        />
      </div>

      <button
        className="btn-forms checked"
        type="button"
        onClick={ handleClick }
      >
        Simular
      </button>
    </div>
  );
}
