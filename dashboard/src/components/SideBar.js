import React from 'react';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';
import { Link, Route, Switch } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import Chart from './Chart';
import AdvancedStatics from './AdvancedStatics';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-dark d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={logo} alt="Digital House" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>RODAWISE - Home</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/AdvancedStatics">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Estadísticas Avanzadas</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route path="/AdvancedStatics">
                    <AdvancedStatics />
                </Route>
                <Route component={NotFound} ></Route>
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;