import React from 'react';
import { useState, useEffect } from "react";
import CanvasJSReact from '../canvasjs.react';
import PagesTable from './PagesTable';


const CanvasJSChart = CanvasJSReact.CanvasJSChart;



function AdvancedChartPie() {
    const [optionsPie, setOptionsPie] = useState([]);
    const [pages, setPages] = useState([]);
    let [deleteCounter, setDeleteCounter] = useState([]);

    useEffect(() => {
        fetch("api/visitedPages")
            .then(response => response.json())
            .then(data => {
                setOptionsPie({
                    exportEnabled: true,
                    animationEnabled: true,
                    title: {
                        text: ""
                    },
                    data: [{
                        type: "pie",
                        startAngle: 75,
                        toolTipContent: "<b>{label}</b>: {y} visitas",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 16,
                        indexLabel: "{label}",
                        dataPoints: [
                            { y: data.data[0].numberOfvisits, label: data.data[0].page },
                            { y: data.data[1].numberOfvisits, label: data.data[1].page },
                            { y: data.data[2].numberOfvisits, label: data.data[2].page },
                            { y: data.data[3].numberOfvisits, label: data.data[3].page },
                            { y: data.data[4].numberOfvisits, label: data.data[4].page },
                            { y: data.data[5].numberOfvisits, label: data.data[5].page },
                            { y: data.data[6].numberOfvisits, label: data.data[6].page },
                            { y: data.data[7].numberOfvisits, label: data.data[7].page },
                            { y: data.data[8].numberOfvisits, label: data.data[8].page }
                        ]
                    }],
                    colorSet: "customColorSet1"
                })
            });
    }, [deleteCounter]);

    useEffect(() => {
        fetch("api/visitedPages")
            .then((response) => response.json())
            .then((data) => {
                setPages(data.data);
            });
    }, [deleteCounter]);

    function HandleRestartClicks() {
        fetch("api/visitedPages", { method: "DELETE" })
            .then(value => setDeleteCounter(deleteCounter += 1));
    };


    function HandleRefresh() {
        return setDeleteCounter(deleteCounter +=1);
    };

    if(pages.length === 0){
        return <p></p>;
    }

    return (
        <div className='containerPageClicks'>
            <div className='chart'>
                <CanvasJSChart options={optionsPie} />
                <button className="btn btn-primary position-relative refreshButtons" onClick={() => HandleRefresh()}>
                    Refrescar Estadísticas
                </button>
                <button className="btn btn-primary position-relative refreshButtons" onClick={() => HandleRestartClicks()}>
                    Reiniciar Estadísticas
                </button>
                <p className="btn btn-info position-relative periodButton anotherButtonClass">Estadísticas desde: {pages[0].lastRestarted} </p>
            </div>
            <div className='pagesTable'>
                <PagesTable {...deleteCounter} />
            </div>


        </div>

    )
}
export default AdvancedChartPie;