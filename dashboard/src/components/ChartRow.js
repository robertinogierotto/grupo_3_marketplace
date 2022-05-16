import React from 'react';


function ChartRow(product){
    return (
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>$ {product.price}</td>
                    <td>{product.discount} %</td>
                    <td>{product.ProductCategory.name}</td>
                </tr>
            )
    }
    
        

export default ChartRow;