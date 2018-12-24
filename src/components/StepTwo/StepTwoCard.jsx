
import React from 'react';

import StepTwoCardAnswer from './StepTwoCardAnswer.jsx'

const StepTwoCard = ({ title, index, answers, addAnswer }) => {

    return ( 
        <div className="card">
            <div className="card-body quiz-card">
                <h5 className="h5 card-title">{`Option ${index + 1}: ${title}`}</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-pros">
                            <h6 className="h6">Pros</h6>                            
                            {
                                answers.pros.map((answer, index) => {
                                    return <StepTwoCardAnswer key={index} />
                                })
                            }
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-rounded btn-outline-primary"
                                onClick={() => addAnswer(index, 'pros')}
                            > <span>+</span> Add another</button>
                        </div>                                
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-cons">
                            <h6 className="h6">Cons</h6>
                            {
                                answers.cons.map((answer, index) => {
                                    return <StepTwoCardAnswer key={index} />
                                })
                            }
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-rounded btn-outline-primary"
                                onClick={() => addAnswer(index, 'cons')}
                            > <span>+</span> Add another</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default StepTwoCard;