import React from 'react';

const NextStep = ({ currentStep, nextStep, handleNextStep }) => {
    
    return (
        <div className="quiz-next-step">
            <button 
                type="button" 
                className="btn btn-dark"
                onClick={() => handleNextStep(nextStep)}
                disabled={currentStep >= nextStep}
            >I'm ready for Step {nextStep}</button>
        </div>
    )
}
 
export default NextStep