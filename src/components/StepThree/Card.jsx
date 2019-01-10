import React from 'react';

import Chart from './Chart.jsx'
import Numbers from './Numbers.jsx'

const Card = ({
    pros, 
    cons, 
    result, 
    title, 
    chartLength
}) => {    
    return ( 
        <div className="col-sm-6 col-md-4">
            <div className="card card-result">
                <div className="card-body">
                    <h5 className="h5 card-title">{title}</h5>
                    <Chart result={result} chartLength={chartLength} />
                    <div className="row justify-content-between">
                        <Numbers  result={result} type={'pros'} count={pros} >Pros</Numbers>
                        <Numbers  result={result} type={'cons'} count={cons} >Cons</Numbers>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default Card