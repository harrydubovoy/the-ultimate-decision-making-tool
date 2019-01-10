import React from 'react';

const Chart = ({result, chartLength}) => {
    return (
        <div className="card-result__chart">               
            <svg className="circle-chart" viewBox="0 0 35.63 35.63" width="96px" height="96px" xmlns="http://www.w3.org/2000/svg">
                <circle className="circle-chart__background" stroke="#f8fafa" strokeWidth="3" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                <circle className="circle-chart__circle" stroke={result > 0 ? "#cee7ea": "#fbdbd9" } strokeWidth="3" strokeDasharray={`${chartLength}, 100`} strokeLinecap="round" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                <g className="circle-chart__info">
                    <text className="circle-chart__percent" x="17.91549431" y="17" alignmentBaseline="central" textAnchor="middle" fontSize="8">
                        { result > 0 ? `+${result}`: result }
                    </text>
                </g>
            </svg>                                 
        </div>
    )
}
 
export default Chart