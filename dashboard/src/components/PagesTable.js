import React from 'react';
import { useState, useEffect } from "react";

function PagesTable(deleteCounter) {
    const [pagesByClick, setPagesByClick] = useState([]);


    useEffect(() => {
        fetch("api/visitedPages")
            .then(response => response.json())
            .then(data => {
                setPagesByClick(data.data)
            });
    }, [deleteCounter]);


    return (
        <table className="table table-hover table-dark tablePages">
            <thead>
                <tr>
                    <th scope="col">Página</th>
                    <th scope="col">Numero de Visitas</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {pagesByClick.map((page, i) => {
              return (
                <tr key={i}>
                    <th scope="row">{page.page}</th>
                    <td className='position-relative numberOfVisits'>{page.numberOfvisits}</td>
                    <td><a href={page.url} rel="noreferrer" target="_blank" className="btn btn-primary linkToPage">Ir a la página</a></td>
                </tr>
              )
            })}
            </tbody>
        </table>
    );
}

export default PagesTable;