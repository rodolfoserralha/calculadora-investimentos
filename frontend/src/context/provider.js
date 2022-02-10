import React, { useState } from 'react';
import AppContext from '../context/index';

function Provider({ children }) {
  const [initialContribution, setInitialContribution] = useState('0.00')
  const [timeMonths, setTimeMonths] = useState(1);
  const [ipca, setIpca] = useState('');
  const [income, setIncome] = useState('bruto');
  const [incomeCheckIcon, setIncomeCheckIcon] = useState('bruto checkicon');
  const [initialMonthlyContribution, setInitialMonthlyContribution] = useState('0.00')
  const [profitability, setProfitability] = useState('1');
  const [cdi, setCdi] = useState('');
  const [index, setIndex] = useState('pos');
  const [checkIcon, setCheckIcon] = useState('pos checkicon');
  const [simulate, setSimulate] = useState(false);
  const [simulateResults, setSimulateResults] = useState('');

  const contextValue = {
    initialContribution,
    setInitialContribution,
    timeMonths,
    setTimeMonths,
    ipca,
    setIpca,
    income,
    setIncome,
    initialMonthlyContribution,
    setInitialMonthlyContribution,
    profitability,
    setProfitability,
    cdi,
    setCdi,
    index,
    setIndex,
    checkIcon, 
    setCheckIcon,
    simulate,
    setSimulate,
    simulateResults,
    setSimulateResults,
    incomeCheckIcon,
    setIncomeCheckIcon
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;