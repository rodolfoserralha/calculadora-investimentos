import { Chart } from "react-google-charts";

export default function GraphicData() {
  const data = [
    ["0", "Sem Aporte", "Com Aporte"],
    ["0", 2, 2],
    ["1", 2, 3],
    ["2", 2, 4],
    ["3", 2, 5],
    ["4", 2, 6],
    ["5", 2, 7],
    ["6", 2, 8],
    ["7", 2, 9],
    ["8", 2, 10],
    ["9", 2, 11],
    ["10", 2, 12],
    ["11", 2, 13],
    ["12", 2, 14],
  ];

  const options = {
    title: "Projeção de valores",
    colors: ["#000000", "#ED8E53"],
    chartArea: { width: "70%" },
    isStacked: true,
    orientation: 'horizontal',
    backgroundColor: 'none',
    hAxis: {
      title: "Tempo (meses)",
      minValue: 0,
    },
    vAxis: {
      title: "Valor R$",
    },
  };

  return (
     <div className="chart">
      <Chart
        chartType="BarChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
     </div>
  )
}