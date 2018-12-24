import React from 'react'

import StepOneInput from './StepOneInput.jsx'

const StepOne = ({ options, titleOption, addOption }) => {    

    return ( 

            <section className="quiz-section quiz-step">

                <h2 className="h2 quiz-step-title">Step 1. What Are My Options?</h2>

                <div className="quiz-step-descr">
                    <p>Lay out ALL VERSIONS of the potential plans that you are considering. If one of the options has a few different variables, you need to separate them out into its own option.</p>
                    <p>E.g.</p>
                    <p>Option 1: Quit work now, travel, then start masters degree in August in Manchester.</p>
                    <p>Option 2: Quit work now, travel, then start masters degree in August in Madrid.</p>
                    <p>Option 3: Accept new job opportunity in London (no travel, no masters).</p>
                </div>

                <div className="quiz-form">
                    {
                        options.map( (option, index) => {
                            return (
                                <StepOneInput 
                                    key={index} 
                                    index={index} 
                                    placeholder={option.placeholder} 
                                    title={option.title} 
                                    titleOption={titleOption}
                                />
                            )    
                        })
                    }

                    <button 
                        type="submit" 
                        className="btn btn-primary btn-rounded btn-outline-primary"
                        onClick={addOption}
                    > <span>+</span> Add another option</button>
                </div>

                <div className="quiz-next-step">
                    <button type="button" className="btn btn-dark">I'm ready for Step 2</button>
                </div>

            </section>
     )
}
 
export default StepOne;