import React from 'react';


const StepOneInput = ({ index, placeholder, title, titleOption }) => {

    return (
        <div className="form-group">
            <label htmlFor={`option-${index}`}>Option {index + 1}:</label>
            <input 
                type="text" 
                className="form-control" 
                id={`option-${index}`}
                placeholder={placeholder}
                value={title} 
                onChange={ () => titleOption(event, index) }
            />
        </div>      
     )
}
 
export default StepOneInput;