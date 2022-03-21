import Axis from 'canvasjs/src/core/axis';
import { FaBold } from 'react-icons/fa';
import CanvasJSReact from './canvasjs.react';
import './Tokenomics.css';
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
            width: 600,
            height: 500,
            colorSet: "gradient",
            theme: "dark1",
            title:{
                text: "Token Distribution",
                fontColor: "white",
                fontFamily: "arial",
                fontWeight:  "bold",
                fontSize: 40    
            },
            legend: {
                fontColor: "white",
                labelFontColor:"white"
               
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