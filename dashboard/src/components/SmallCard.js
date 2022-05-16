import React from 'react';

function SmallCard(staticx){
    return(
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${staticx.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${staticx.color} text-uppercase mb-1`}> {staticx.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{staticx.cuantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${staticx.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default SmallCard;