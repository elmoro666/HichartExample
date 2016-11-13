import React from "react";
import ReactDOM from "react-dom";
import Highcharts from "highcharts";
import ReactHighcharts from "react-highcharts";

const Chart = React.createClass({
    isPureConfig: false,
    chartOptions: {
        xAxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]},
        series: [{data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]}]
    },
    render() {
        return (
            <ReactHighcharts ref={(c) => this.rchart = c} config={this.chartOptions} isPureConfig={this.isPureConfig} />
        );
    }
});

ReactDOM.render(
    <Chart />,
  document.getElementById("container")
);
