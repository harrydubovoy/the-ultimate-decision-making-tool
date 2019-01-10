import React from 'react';

import Chart from './Chart.jsx'

const CardResult = ({pros, cons, result, title, chartLength}) => {    
    
    return ( 
        <div className="col-sm-6 col-md-4">
            <div className="card card-result">
                <div className="card-body">
                    <h5 className="h5 card-title">{title}</h5>

                    <Chart result={result} chartLength={chartLength} />

                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <div className="card-result__numbers">
                                <div>Pros</div>
                                <div className="pros-color">+{pros}</div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="card-result__numbers">
                                <div>Cons</div>
                                <div className="cons-color">-{cons}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CardResult;