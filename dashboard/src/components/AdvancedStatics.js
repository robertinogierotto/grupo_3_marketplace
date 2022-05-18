import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import AdvancedChart from './AdvancedChart';
import AdvancedChartPie from './AdvancedChartPie';
import UserStatics from './UserStatics';



function AdvancedStatics() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <p className='h2 text-primary position-absolute ml-5'> Productos más clickeados</p>
                    <AdvancedChart/>
                    <hr/>
                    <p className='h2 text-primary position-absolute ml-5 mb-5'> Páginas más visitadas</p>
                    <AdvancedChartPie/>
                    <hr/>
                    <p className='h2 text-primary position-relative ml-5 mb-5'> Estadísticas de Usuario</p>
                    <UserStatics/>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default AdvancedStatics;