import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

function UserStatics() {
  const [userStatics, setUserStatics] = useState([]);
  const [userLastModified, setUserLastModified] = useState([]);
  let [deleteCounter, setDeleteCounter] = useState([]);


  useEffect(() => {
    fetch("api/userStatics")
      .then(response => response.json())
      .then(data => {
        setUserStatics([
          {
            title: "Usuarios registrados",
            color: "info",
            cuantity: data.data.totalUsers,
            icon: "fa-clipboard-check",
          },
          {
            title: "Nuevos usuarios en este período",
            color: "success",
            cuantity: data.data.newUsers,
            icon: "fa-plus",
          },
          {
            title: "Usuarios Logueados en este período",
            color: "primary",
            cuantity: data.data.loggedUsers,
            icon: "fa-sign-in-alt",
          },
          {
            title: "Comentarios enviados en este período",
            color: "success",
            cuantity: data.data.comments,
            icon: "fa-comment"
          }
        ]);
      });
  }, [deleteCounter]);

  useEffect(() => {
    fetch("api/userStatics")
        .then((response) => response.json())
        .then((data) => {
          setUserLastModified(data.data.lastRestarted);
        });
}, [deleteCounter]);

  function HandleRestartClicks () {
    fetch("api/userStatics", { method: "DELETE" })
    .then(value => setDeleteCounter(deleteCounter += 1));
};

function HandleRefresh () {
  return setDeleteCounter(deleteCounter +=1);
};

if(!userLastModified){
  return <p></p>;
}

  return (
    <div className="smallCardsStatics">
      {userStatics.length === 0 && <p>Cargando...</p>}
      {userStatics.map((staticx, i) => {
        return <SmallCard {...staticx} key={i} />;
      })}
      <button className="btn btn-primary position-relative refreshButtons refreshBUsers" onClick={() => HandleRefresh()}>
        Refrescar Estadísticas
      </button>
      <button className="btn btn-primary position-relative refreshButtons refreshBUsers" onClick={() => HandleRestartClicks()}>
        Reiniciar Estadísticas
      </button>
      <p className="btn btn-info position-relative refreshButtons refreshBUsers specialButt anotherButtonClass">Estadísticas desde: {userLastModified} </p>
    </div>
  );
}

export default UserStatics;