import React from 'react';
import CanvasJSReact from '../canvasjs.react';
import { useState, useEffect } from "react";
import ClickedProducts from './ClickedProducts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdvancedChart() {
    const [options, setOptions] = useState([]);
    const [productsByClick, setproductsByClick] = useState([]);


    useEffect(() => {
        fetch("api/productsAndClicks")
            .then(response => response.json())
            .then(data => {
                setOptions({
                    title: {
                        text: ""
                    },
                    data: [{
                        type: "column",
                        dataPoints: [
                            { label: data.data[0].name, y: data.data[0].ClicksByProduct.numberOfClicks },
                            { label: data.data[1].name, y: data.data[1].ClicksByProduct.numberOfClicks },
                            { label: data.data[2].name, y: data.data[2].ClicksByProduct.numberOfClicks },
                            { label: data.data[3].name, y: data.data[3].ClicksByProduct.numberOfClicks },
                            { label: data.data[4].name, y: data.data[4].ClicksByProduct.numberOfClicks },
                            { label: data.data[5].name, y: data.data[5].ClicksByProduct.numberOfClicks }

                        ]
                    }],
                    colorSet: "customColorSet1",
                    axisY: {
                        title: "Número de clicks",
                        interval: 1,
                        includeZero: true
                    },
                    toolTip: {
                        fontColor: 'red',
                        backgroundColor: "white",
                    },
                    axisX: {
                        labelWrap: true,
                        labelAngle: 0,
                    }
                })
            });
    }, []);

    useEffect(() => {
        fetch("api/productsAndClicks")
            .then(response => response.json())
            .then(data => {
                setproductsByClick(data.data)
            });
    }, []);

    CanvasJS.addColorSet('customColorSet1',
        [
            '#050A30',
            '#000C66',
            '#0000FF',
            '#3EA0DD',
            '#7EC8E3',
            '#B1D4E0',
            '#F5A52A',
            '#23BFAA',
            '#FAA586',
            '#EB8CC6',
        ]);

    return (
        <div className='containerProductsClicks'>
            <div className='chart'>
                <CanvasJSChart options={options} />
            </div>
            <div className='productCards'>
            {productsByClick.map((product, i) => {
              return (<ClickedProducts {...product} key={i} />)
            })}
            </div>
            

        </div>

    )
}
export default AdvancedChart;