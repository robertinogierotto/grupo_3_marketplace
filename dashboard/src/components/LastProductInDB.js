import React from 'react';
import { useState, useEffect } from "react";


function LastProductInDB(){
const [lastProduct, setLastProduct] = useState([]);

  useEffect(() => {
    fetch("api/lastCreatedProduct")
      .then(response => response.json())
      .then(data => {
        setLastProduct(data.data);
      });
  }, []);

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4 border border-info">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-primary">Ultimo producto creado</h5>
                </div>
                <div className="card-body ">
                    <div className="text-center">
                        {lastProduct.length === 0 && <p>Cargando...</p>}
                        <h3 className='card-title'>{lastProduct.name}</h3>
                        <div className='card-subtitle'>Precio: ${lastProduct.price}</div>
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`http://localhost:3001/images/products/${lastProduct.image}`} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDB;
