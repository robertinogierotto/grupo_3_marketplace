import React from 'react';

function Category(category){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                  <div className="card bg-primary text-white shadow">
                    <div className="card-body">
                      <div className="h3 card-title">{category.categoryName}</div>
                      <div className="card-subtitle" >Cantidad de Productos: {category.products} </div>
                    </div>
                  </div>
                </div>
        </React.Fragment>
    )
}
export default Category;