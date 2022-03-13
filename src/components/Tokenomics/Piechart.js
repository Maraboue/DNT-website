import CanvasJSReact from './canvasjs.react';

var React = require('react');

var Component = React.Component;

var CanvasJS = CanvasJSReact.CanvasJS;

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

CanvasJS.addColorSet("gradient",
    [
        //colorSet Array

        "#18a5f1",
        "#1182f9",
        "#476098",
        "#163968",
        "#61dafb"
    ]);

class PieChart extends Component {



    render() {

        const options = {
            animationEnabled: true,
            exportFileName: "Token Distribution",
            exportEnabled: true,
            backgroundColor: "transparent",
            width: 800,
            height: 600,
         
            colorSet: "gradient",

            title:{
                text: "Token Distribution",
                fontColor: "aqua",
            },

            axisX: {
         
            },


            data: [{
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 20,
                indexLabel: "{label} - {y}%",
                dataPoints: [
                    { y: 10, label: "Team" },
                    { y: 45, label: "Public Sale" },
                    { y: 10, label: "Marketing" },
                    { y: 35, label: "Reserve" }
                ]
            }]

        }
        return (

            <div className="PieChart" id="PieChart">
                <CanvasJSChart options = {options}
                    /* onRef={ref => this.chart = ref} */

                />

                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>

        );
    }
}
export default PieChart;