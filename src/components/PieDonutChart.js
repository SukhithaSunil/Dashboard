import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const PieDonutChart = () => {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Sales Distribution",
    },
    yAxis: {
      title: {
        text: "Total percent market share",
      },
    },
    plotconst: {
      pie: {
        shadow: false,
      },
    },
    tooltip: {
      formatter: function () {
        return "<b>" + this.point.name + "</b>: " + this.y + " %";
      },
    },
    series: [
      {
        name: "Browsers",
        data: [
          ["France", 30],
          ["France", 20],
          ["Italy", 20],
          ["Italy", 30],
        ],
        size: "60%",
        innerSize: "50%",
        showInLegend: true,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options}  style ={{top: 168,
    left: 735,
    width: 369,
    height: 439}}/>;
};

export default PieDonutChart;
