import React from 'react';

function ClickedProducts(product) {


    return (
        <div className="card mb-1 position-relative cardProducts" style={{ width: '18rem', height: '18rem' }}>
            <img className="card-img-top img-insideCard" src={`http://localhost:3001/images/products/${product.image}`} alt="Card image cap" />
            <div className="card-body">
                <h6 className="card-title text-primary">{product.name}</h6>
                <p className="card-text font-weight-bold">Número de Clicks: {product.ClicksByProduct.numberOfClicks} <br /> Es oferta del día: {product.dailyOnSale == 0 ? 'SI' : 'NO'} </p>
            </div>
            <a href={`http://localhost:3001/admin/editProduct/${product.id}`} target="_blank" className="btn btn-primary linkToDetail">Editar Producto</a>
        </div>
    );
}

export default ClickedProducts;