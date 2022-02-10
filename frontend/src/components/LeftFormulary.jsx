import React, { useEffect, useContext } from 'react';
import check from '../images/check-solid.svg'
import infocircle from '../images/info-circle-solid (1).svg'
import AppContext from '../context';

export default function SimulatorLeft() {
  const { initialContribution, setInitialContribution, timeMonths,
    setTimeMonths, ipca, setIpca, setCdi, incomeCheckIcon, setIncomeCheckIcon,
    setInitialMonthlyContribution, setProfitability, setIncome } = useContext(AppContext);

  useEffect(() => {
    async function fetchApi() {
      const result = await fetch('http://localhost:3000/indicadores')
        .then((res) => res.json())
        .then((data) => data)
        .catch(error => console.error('Unable to get items.', error));

      setCdi(`${result[0].valor}%`)
      setIpca(`${result[1].valor}%`)
      return result;
    }
  
    fetchApi();
  }, [setCdi, setIpca]);

  function handleChange({ target }) {
    setInitialContribution(target.value)
  }

  function verifyBtn({ target }) {
    setIncome(target.value);
    setIncomeCheckIcon(`${target.value} checkicon`);  
  }

  function clearFields() {
    setInitialContribution(`0.00`);
    setTimeMonths(1);
    setInitialMonthlyContribution(`0.00`);
    setProfitability(1);
  }

  return (
    <>
    <div className="forms-container">
      <h2 id="simulator-text">Simulador</h2>
      <div className="input-container">
        <div id="income-container">
          <p className="span-name">Rendimento</p>
          <img id="icon" src={ infocircle } alt="img" />
        </div>
        <div className="up-btns">
          <button
            className={ incomeCheckIcon === 'bruto checkicon' ? 'upright-btns checked' : 'upright-btns' }
            type="button"
            onClick={ verifyBtn }
            value="bruto"
          >
            { incomeCheckIcon === 'bruto checkicon' ? <img className="check-icon" src={ check } alt="check-icon" /> : null}
            Bruto
          </button>
          <button
            className={ incomeCheckIcon === 'liquido checkicon' ? 'upleft-btns checked' : 'upleft-btns' }
            type="button"
            onClick={ verifyBtn }
            value="liquido"
          >
            { incomeCheckIcon === 'liquido checkicon' ? <img className="check-icon" src={ check } alt="check-icon" /> : null}
            Líquido
          </button>

        </div>
      </div>
      <div className="input-container">
        <p className="span-name">Aporte Inicial</p>
        <label id="label-initial" htmlFor="initial-input">R$</label>
        <input
          id="name-input"
          className="initial-input"
          type="number"
          value={ initialContribution }
          onChange={ handleChange }
          step="0.01"
        />
      </div>

      <div className="input-container">
        <p className="span-name">Prazo (em meses)</p>
        <input
          id="name-input"
          className="inputs"
          type="number"
          value={ timeMonths }
          onChange={ ({ target }) => setTimeMonths(target.value) }
          min="1"
          max="240"
        />
      </div>

      <div className="input-container">
        <p className="span-name">IPCA (ao ano)</p>
        <input
          id="name-input"
          className="inputs"
          type="text"
          value={ ipca }
          onChange={ ({ target }) => setTimeMonths(target.value) }
        />
      </div>

      <button
        className="btn-forms"
        type="button"
        onClick={ clearFields }
      >
        Limpar Campos
      </button>
    </div>
    </>
  );
}
