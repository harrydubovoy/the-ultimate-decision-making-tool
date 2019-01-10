import React from 'react';

const Description = ({ step }) => {

    if (step == 1) {
        return (
            <React.Fragment>
                <h2 className="h2 quiz-step-title">Step 1. What Are My Options?</h2>
                <div className="quiz-step-descr">
                    <p>Lay out ALL VERSIONS of the potential plans that you are considering. If one of the options has a few different variables, you need to separate them out into its own option.</p>
                    <p>E.g.</p>
                    <p>Option 1: Quit work now, travel, then start masters degree in August in Manchester.</p>
                    <p>Option 2: Quit work now, travel, then start masters degree in August in Madrid.</p>
                    <p>Option 3: Accept new job opportunity in London (no travel, no masters).</p>
                </div>    
            </React.Fragment>
        )        
    } else if(step == 2) {
        return (
            <React.Fragment>
                <h2 className="h2 quiz-step-title">Step 2. Evaluating The Good and Bad, and the Ugly</h2>
                <div className="quiz-step-descr">
                    <p>List out the pros and cons of each option. Then, give each item an IMPORTANCE rating out of ten.</p>
                    <br />
                    <p>Opportunity to travel might be an 8/10, and missing out on family events might only rate a 3/10 (sorry Mum!). This is your life, so include everything that is significant to you. When working through one of your options, try to have around same amount of pros and cons.</p>    
                </div> 
            </React.Fragment>
        ) 
    } else if(step == 3) {
        return (
            <React.Fragment>
                <h2 className="h2 quiz-step-title">Step 3. The Results Speak For Themselves</h2>
                <div className="quiz-step-descr">
                    <p>So, here you have it! Here is the low-down on where you're at.</p>
                    <br />
                    <p>Now that you have a very clear picture of where you stand, you can stop the repetition of turning it over in your mind. Allow yourself the space to come to a clear and conscious decision with absolute certainty.</p>                    
                </div>   
            </React.Fragment>
        )
    }
}
 
export default Description