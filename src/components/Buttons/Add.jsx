import React from 'react';

const Add = ({ handleAdd, children }) => {
    
    return (
        <button 
            type="submit" 
            className="btn btn-primary btn-rounded btn-outline-primary"
            onClick={handleAdd}
        >{ children }</button>
    )
}
 
export default Add