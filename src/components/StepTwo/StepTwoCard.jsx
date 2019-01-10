
import React from 'react';

import StepTwoCardAnswer from './StepTwoCardAnswer.jsx'

const StepTwoCard = ({ title, index, id, answers, addAnswer, deleteOption, raitingAnswer, prosSelected, consSelected }) => {

    const indexCard = index

    return ( 
        <div className="card">
            <div className="card-body quiz-card">
                <div className="quiz-delete" onClick={() => {deleteOption(id)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ececec" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </div>
                <h5 className="h5 card-title">{`Option ${index + 1}: ${title}`}</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-pros">
                            <h6 className="h6">Pros</h6>                            
                            {
                                answers.pros.map((n, index) => {
                                    return <StepTwoCardAnswer 
                                                key={index}  
                                                raitingAnswer={raitingAnswer}
                                                indexAnswer={index}
                                                type="pros"
                                                indexCard={indexCard}
                                                selected={prosSelected[index]}
                                            />
                                })
                            }
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-rounded btn-outline-primary"
                                onClick={() => addAnswer('pros', index)}
                            > <span>+</span> Add another</button>
                        </div>                                
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-cons">
                            <h6 className="h6">Cons</h6>
                            {
                                answers.cons.map((n, index) => {
                                    return <StepTwoCardAnswer
                                                key={index}  
                                                raitingAnswer={raitingAnswer}
                                                indexAnswer={index}
                                                type="cons"
                                                indexCard={indexCard}
                                                selected={consSelected[index]}
                                            />
                                })
                            }
                            <button 
                                type="submit" 
                                className="btn btn-primary btn-rounded btn-outline-primary"
                                onClick={() => addAnswer('cons', index)}
                            > <span>+</span> Add another</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default StepTwoCard;