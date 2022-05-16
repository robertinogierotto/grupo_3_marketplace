import React from 'react';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdvancedChart() {
    const options = {
        title: {
            text: ""
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: 'asd', y: 15 },
                { label: "Orange", y: 13 },
                { label: "Banana", y: 11 },
                { label: "Mango", y: 9 },
                { label: "Grape", y: 5 }
            ]
        }],
        colorSet: "customColorSet1",
        axisY: {
            title: "Número de clicks",
            interval: 1,
            includeZero: true
        },
        toolTip:{
            fontColor: 'white',
            backgroundColor: "#3598FE",
        },
        axisX:{
            
        }

    }
    CanvasJS.addColorSet('customColorSet1',
        [
            '#f3f575',
            '#b2e79a',
            '#95d0b3',
            '#cddfc2',
            '#f2f0e3',
            '#3EA0DD',
            '#F5A52A',
            '#23BFAA',
            '#FAA586',
            '#EB8CC6',
        ]);

    return (

        <div className='card-body'>
            <CanvasJSChart options={options} />
        </div>

    )
}
export default AdvancedChart;