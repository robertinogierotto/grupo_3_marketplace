import React from 'react';
import LastProductInDB from './LastProductInDB';
import ProductsInDB from './ProductsInDB';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDB />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductsInDB />

        </div>
    )
}

export default ContentRowCenter;