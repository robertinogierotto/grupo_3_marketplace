import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import CanvasJSReact from '../canvasjs.react';
import AdvancedChart from './AdvancedChart';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function AdvancedStatics() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <p className='h2 text-primary text-center'> Productos más clickeados</p>
                    <AdvancedChart/>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdvancedStatics;