import React from 'react';
import ChartRow from './ChartRow';
import TopBar from './TopBar';
import Footer from './Footer';

import { useState, useEffect } from "react";


function Chart() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("api/products")
            .then(response => response.json())
            .then(data => {
                setProducts(data.data);
            });
    }, []);

    return (

        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />

                    <div className="card shadow mb-6">
                        <div className="card-body">
                            <p className='h2 card-title text-primary'>Listado de Productos</p>
                            <div className="table-responsive">
                                <table className="table table-hover table-dark" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descuento</th>
                                            <th>Categoría</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Descuento</th>
                                            <th>Categoría</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {products.length === 0 && <tr><th>Cargando...</th></tr>}
                                        {
                                            products.map((product, i) => {
                                                return <ChartRow {...product} key={i} />
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Chart;