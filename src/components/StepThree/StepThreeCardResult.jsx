import React from 'react';


const StepThreeCardResult = ({pros, cons, result, title, maxRaiting}) => {      
    
    return ( 
        <div className="col-sm-6 col-md-4">
            <div className="card card-result">
                <div className="card-body">
                    <h5 className="h5 card-title">{title}</h5>
                    <div className="card-result__chart">               
                        <svg className="circle-chart" viewBox="0 0 35.63 35.63" width="96px" height="96px" xmlns="http://www.w3.org/2000/svg">
                                <circle className="circle-chart__background" stroke="#f8fafa" strokeWidth="3" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                                <circle className="circle-chart__circle" stroke={result > 0 ? "#cee7ea": "#fbdbd9" } strokeWidth="3" strokeDasharray={`${maxRaiting*10}, 100`} strokeLinecap="round" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                            <g className="circle-chart__info">
                                <text className="circle-chart__percent" x="17.91549431" y="17" alignmentBaseline="central" textAnchor="middle" fontSize="8">
                                    { result > 0 ? `+${result}`: result }
                                </text>
                            </g>
                        </svg>                                 
                    </div>
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
 
export default StepThreeCardResult;