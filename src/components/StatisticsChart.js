import React, { Component } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

export class StatisticsChart extends Component {
  render() {
    const options = {
      chart: {
        type: "areaspline",
      },
      title: {
        text: "Statistics",
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "top",
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yAxis: {
        showEmpty: false,
        title: {
          text: "Views",
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: " units",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.2,
        },
      },
      series: [
        {
          name: "Total Views",
          data: [3, 4, 3, 5, 4, 10, 12],
        },
        {
          name: "Products Sold",
          data: [1, 3, 4, 3, 3, 5, 4],
        },
      ],
    };
    return (
      <HighchartsReact
        highcharts={Highcharts}
        // constructorType={'stockChart'}
        options={options}
        style ={{top: 168,
          left: 335,
          width: 370,
          height: 439}}
      />
    );
  }
}

export default StatisticsChart;
