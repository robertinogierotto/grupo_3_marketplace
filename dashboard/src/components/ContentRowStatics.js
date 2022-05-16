import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

function ContentRowStatics() {
  const [statics, setStatics] = useState([]);

  useEffect(() => {
    fetch("api/statics")
      .then(response => response.json())
      .then(data => {
        setStatics([
          {
            title: "Productos en la base de datos",
            color: "info",
            cuantity: data.productsCount,
            icon: "fa-barcode",
          },
          {
            title: " Categorías ",
            color: "success",
            cuantity: data.categoriesCount,
            icon: "fa-list",
          },
          {
            title: "Usuarios registrados",
            color: "primary",
            cuantity: data.usersCount,
            icon: "fa-user-check",
          },
        ]);
      });
  }, []);

  return (
    <div className="row ">
      {statics.length === 0 && <p>Cargando...</p>}
      {statics.map((staticx, i) => {
        return <SmallCard {...staticx} key={i} />;
      })}
    </div>
  );
}

export default ContentRowStatics;
