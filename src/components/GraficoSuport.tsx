import React from "react";
import { Chart } from "react-google-charts";

/*var data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];*/

interface dados{
  titleTextStyle?: {
    fontSize: 14, // 12, 18 whatever you want (don't specify px)
    bold:true,    // true or false
    }  
  title: string
  is3D?: true
  data?:any
    
};

 

export function GraficoSuport(props:dados) {
  let data=props.data
 
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={props}
      width={"100%"}
      height={"400px"}
      
     

    />
  );
}
