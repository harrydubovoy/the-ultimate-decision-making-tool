import React from 'react';

const StepThree = () => {
    return ( 
            <section className="quiz-section quiz-step">

            <h2 className="h2 quiz-step-title">Step 3. The Results Speak For Themselves</h2>

            <div className="quiz-step-descr">
                <p>So, here you have it! Here is the low-down on where you're at.</p>
                <br />
                <p>Now that you have a very clear picture of where you stand, you can stop the repetition of turning it over in your mind. Allow yourself the space to come to a clear and conscious decision with absolute certainty.</p>                    
            </div>

            <div className="row">

                <div className="col-sm-6 col-md-4">
                    <div className="card card-result">
                        <div className="card-body">
                            <h5 className="h5 card-title">Moving to New York</h5>
                            <div className="card-result__chart">               
                                <svg className="circle-chart" viewBox="0 0 35.63 35.63" width="96px" height="96px" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="circle-chart__background" stroke="#f8fafa" strokeWidth="3" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                                        <circle className="circle-chart__circle" stroke="#cee7ea" strokeWidth="3" strokeDasharray="10,100" strokeLinecap="round" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                                    <g className="circle-chart__info">
                                        <text className="circle-chart__percent" x="17.91549431" y="17" alignmentBaseline="central" textAnchor="middle" fontSize="8">+23</text>
                                    </g>
                                </svg>                                 
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <div className="card-result__numbers">
                                        <div>Pros</div>
                                        <div className="pros-color">+35</div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="card-result__numbers">
                                        <div>Cons</div>
                                        <div className="cons-color">-12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="card card-result">
                        <div className="card-body">
                            <h5 className="h5 card-title">Staying in Beijing</h5>
                            <div className="card-result__chart">               
                                <svg className="circle-chart" viewBox="0 0 35.63 35.63" width="96px" height="96px" xmlns="http://www.w3.org/2000/svg">
                                        <circle className="circle-chart__background" stroke="#f8fafa" strokeWidth="3" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                                        <circle className="circle-chart__circle" stroke="#fbdbd9" strokeWidth="3" strokeDasharray="10,100" strokeLinecap="round" fill="none" cx="17.91549431" cy="17.91549431" r="15.91549431" />
                                    <g className="circle-chart__info">
                                        <text className="circle-chart__percent" x="17.91549431" y="17" alignmentBaseline="central" textAnchor="middle" fontSize="8">-44</text>
                                    </g>
                                </svg>                                 
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-auto">
                                    <div className="card-result">
                                        <div>Pros</div>
                                        <div className="pros-color">+12</div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="card-result__numbers">
                                        <div>Cons</div>
                                        <div className="cons-color">-56</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default StepThree;