import React from 'react';
import favicon from '../assets/images/favicon.jpg';

function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">Página de Administrador</span>
								<img className="img-profile rounded-circle" src={favicon} alt="Favicon" width="60"/>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;