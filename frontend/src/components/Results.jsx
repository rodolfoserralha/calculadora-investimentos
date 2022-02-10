import React, { useContext } from 'react';
import ResultsRectangle from './ResultsRectangle';
import AppContext from '../context';

export default function Results() {
  const { simulateResults } = useContext(AppContext);

  const { aliquotaIR, ganhoLiquido, valorFinalBruto,
    valorFinalLiquido, valorPagoIR, valorTotalInvestido } = simulateResults;

  return (
    <>
      { simulateResults && (
        <>
        <div id="simulation-text">
          <h2 id="simulation-result">Resultado da Simulação</h2>
        </div>
        <div id="rectangles-containers">
          <ResultsRectangle title="Valor Final Bruto" result={ `R$ ${valorFinalBruto}` } />
          <ResultsRectangle title="Alíquota do IR" result={ `${aliquotaIR}%` } />
          <ResultsRectangle title="Valor Pago em IR" result={ `R$ ${valorPagoIR}` } />
          <ResultsRectangle title="Valor Final Líquido" result={ `R$ ${valorFinalLiquido}` } />
          <ResultsRectangle title="Valor Total Investido" result={ `R$ ${valorTotalInvestido}` } />
          <ResultsRectangle title="Ganho Líquido" result={ `R$ ${ganhoLiquido}` } />
        </div>
        </>
      ) }
    </>
  )
}
