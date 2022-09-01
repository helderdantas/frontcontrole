import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "", { role: "style" }],
  ["Total de Chamados", 100, "#b87333"], // RGB value
 
];

interface totalChamados{
  total?:number
}

export function GraficoChamado(props:totalChamados) {
  data[1][1]=props.total
  return (
    <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
  );
}
