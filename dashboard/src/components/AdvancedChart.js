import React from "react";
import CanvasJSReact from "../canvasjs.react";
import { useState, useEffect } from "react";
import ClickedProducts from "./ClickedProducts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdvancedChart() {
    const [options, setOptions] = useState([]);
    const [productsByClick, setproductsByClick] = useState([]);
    let [deleteCounter, setDeleteCounter] = useState([]);

    useEffect(() => {
        fetch("api/productsAndClicks")
            .then((response) => response.json())
            .then((data) => {
                setOptions({
                    title: {
                        text: "",
                    },
                    data: [
                        {
                            type: "column",
                            dataPoints: [
                                {
                                    label: data.data[0].name,
                                    y: data.data[0].ClicksByProduct.numberOfClicks,
                                },
                                {
                                    label: data.data[1].name,
                                    y: data.data[1].ClicksByProduct.numberOfClicks,
                                },
                                {
                                    label: data.data[2].name,
                                    y: data.data[2].ClicksByProduct.numberOfClicks,
                                },
                                {
                                    label: data.data[3].name,
                                    y: data.data[3].ClicksByProduct.numberOfClicks,
                                },
                                {
                                    label: data.data[4].name,
                                    y: data.data[4].ClicksByProduct.numberOfClicks,
                                },
                                {
                                    label: data.data[5].name,
                                    y: data.data[5].ClicksByProduct.numberOfClicks,
                                },
                            ],
                        },
                    ],
                    colorSet: "customColorSet1",
                    axisY: {
                        title: "Número de clicks",
                        interval: 1,
                        includeZero: true,
                    },
                    toolTip: {
                        fontColor: "red",
                        backgroundColor: "white",
                    },
                    axisX: {
                        labelWrap: true,
                        labelAngle: 0,
                    },
                });
            });
    }, [deleteCounter]);

    useEffect(() => {
        fetch("api/productsAndClicks")
            .then((response) => response.json())
            .then((data) => {
                setproductsByClick(data.data);
            });
    }, [deleteCounter]);

    CanvasJS.addColorSet("customColorSet1", [
        "#050A30",
        "#000C66",
        "#0000FF",
        "#3EA0DD",
        "#7EC8E3",
        "#B1D4E0",
        "#289C93",
        "#23BFAA",
        "#1E3F46",
        "#EB8CC6",
    ]);

    function HandleRestartClicks () {
        fetch("api/productsAndClicks", { method: "DELETE" })
        .then(value => setDeleteCounter(deleteCounter += 1));
    };

    function HandleRefresh () {
        return setDeleteCounter(deleteCounter +=1);
    };

    return (
        <div className="containerProductsClicks">
            <div className="chart">
                <CanvasJSChart options={options} />
                <button className="btn btn-primary position-relative refreshButtons" onClick={() => HandleRefresh()}>
                    Refrescar Estadisticas
                </button>
                <button className="btn btn-primary position-relative refreshButtons" onClick={() => HandleRestartClicks()}>
                    Re-iniciar Clicks
                </button>
                <p className="btn btn-primary position-relative periodButton">Estadisticas desde: </p>
            </div>
            <div className="productCards">
                {productsByClick.map((product, i) => {
                    return <ClickedProducts {...product} key={i} />;
                })}
            </div>
        </div>
    );
}
export default AdvancedChart;
