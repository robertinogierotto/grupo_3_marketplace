import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import AdvancedChart from './AdvancedChart';


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