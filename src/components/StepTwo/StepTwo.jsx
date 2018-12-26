import React from 'react';

import StepTwoCard from './StepTwoCard.jsx'

const StepTwo = ({ options, addAnswer, deleteOption, raitingAnswer, nextStep, step }) => { 
    
    return ( 
            <section className="quiz-section quiz-step">

            <h2 className="h2 quiz-step-title">Step 2. Evaluating The Good and Bad, and the Ugly</h2>

            <div className="quiz-step-descr">
                <p>List out the pros and cons of each option. Then, give each item an IMPORTANCE rating out of ten.</p>
                <br />
                <p>Opportunity to travel might be an 8/10, and missing out on family events might only rate a 3/10 (sorry Mum!). This is your life, so include everything that is significant to you. When working through one of your options, try to have around same amount of pros and cons.</p>    
            </div>

            {
                options.map((option, index) => {
                    return <StepTwoCard 
                        key={index}
                        title={option.title} 
                        index={index}
                        id={option.id}
                        answers={option.answers}
                        addAnswer={addAnswer}
                        deleteOption={deleteOption}
                        raitingAnswer={raitingAnswer}
                        prosSelected={option.pros}
                        consSelected={option.cons}
                    />
                })
            }            
            
            <div className="quiz-next-step">
                <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={nextStep}
                    disabled={step > 2}
                >I'm ready for Step 3</button>
            </div>

        </section>
     );
}
 
export default StepTwo;