import React from 'react';

import StepThreeCardResult from './StepThreeCardResult.jsx'

const StepThree = ({ options }) => {
    return ( 
            <section className="quiz-section quiz-step">

            <h2 className="h2 quiz-step-title">Step 3. The Results Speak For Themselves</h2>

            <div className="quiz-step-descr">
                <p>So, here you have it! Here is the low-down on where you're at.</p>
                <br />
                <p>Now that you have a very clear picture of where you stand, you can stop the repetition of turning it over in your mind. Allow yourself the space to come to a clear and conscious decision with absolute certainty.</p>                    
            </div>

            <div className="row">

                {
                    options.map((option, index) => {

                        const maxRaiting = (option.answers.pros.length + option.answers.cons.length)*10                  
                        

                        const a = (Math.abs(option.result)/maxRaiting)*100

                        return <StepThreeCardResult
                            key={index}
                            index={index}
                            pros={option.pros} 
                            cons={option.cons}
                            answers={option.answers}
                            maxRaiting={maxRaiting}
                            title={option.title}
                            a={a}
                        />

                    })
                }

                
                
            </div>
        </section>
     );
}
 
export default StepThree;