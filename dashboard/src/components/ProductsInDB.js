import React from "react";
import { useState, useEffect } from "react";
import Category from "./Category";

function ProductsInDB() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("api/categoriesProducts")
      .then(response => response.json())
      .then(data => {
        setCategories(data.data);
      });
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4 border border-info">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-primary">
            Categorías y cantidad de productos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {categories.length === 0 && <p>Cargando...</p>}
            {categories.map((category, i) => {
              return (<Category {...category} key={i}/>)
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsInDB;
