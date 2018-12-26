import React from 'react';

import StepThreeCardResult from './StepThreeCardResult.jsx'

const StepThree = ({ options, restart }) => {
    return (
        <React.Fragment>
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

                            let pros = option.answers.pros.length,
                                cons = option.answers.cons.length,                     
                                maxRaiting = 0,
                                result = option.result,
                                chartLength

                            maxRaiting = pros > cons ? pros*10 : cons*10
                            chartLength = (Math.abs(result)/maxRaiting)*100

                            return <StepThreeCardResult
                                key={index}
                                index={index}
                                pros={option.pros} 
                                cons={option.cons}
                                answers={option.answers}
                                maxRaiting={maxRaiting}
                                title={option.title}
                                result={option.result}
                                chartLength={chartLength}
                            />

                        })
                    }

                    
                    
                </div>
            </section>
            <div className="wrapper">        
                <div className="quiz-finished__text">And, if you're ready to take action in your life, don't wait any longer. </div>
                <div className="quiz-restart">
                    <button type="submit" className="btn btn-primary" onClick={restart}>Restart</button>
                </div>        
            </div>
        </React.Fragment>
     );
}
 
export default StepThree;