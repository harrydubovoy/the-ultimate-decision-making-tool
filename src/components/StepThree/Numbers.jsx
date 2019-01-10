import React from 'react';

const Numbers = ({ children, type, count}) => {
    return (
        <div className="col-auto">
            <div className="card-result__numbers">
                <div>{children}</div>
                <div className={`${type}-color`}> {type == 'pros' > 0 ? '+':'-'}{count}</div>
            </div>
        </div>
    )
}
 
export default Numbers