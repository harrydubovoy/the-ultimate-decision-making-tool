
import React from 'react';

import CardAnswer from './CardAnswer.jsx'
import Add from '../Buttons/Add.jsx';
import Delete from '../Buttons/Delete.jsx';

const StepTwoCard = ({ 
    title, 
    index, 
    id, 
    answers, 
    addAnswer, 
    deleteOption, 
    raitingAnswer, 
    prosSelected, 
    consSelected
}) => {

    const indexCard = index

    return ( 
        <div className="card">
            <div className="card-body quiz-card">            
                <Delete handleDelete={() => {deleteOption(id)}} />
                <h5 className="h5 card-title">{`Option ${index + 1}: ${title}`}</h5>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-pros">
                            <h6 className="h6">Pros</h6>                            
                            {
                                answers.pros.map((n, index) => {
                                    return <CardAnswer 
                                                key={index}  
                                                raitingAnswer={raitingAnswer}
                                                indexAnswer={index}
                                                type="pros"
                                                indexCard={indexCard}
                                                selected={prosSelected[index]}
                                            />
                                })
                            }
                            <Add handleAdd={() => addAnswer('pros', index)}><span>+</span> Add another</Add>
                        </div>                                
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="quiz-cons">
                            <h6 className="h6">Cons</h6>
                            {
                                answers.cons.map((n, index) => {
                                    return (
                                        <CardAnswer
                                            key={index}  
                                            raitingAnswer={raitingAnswer}
                                            indexAnswer={index}
                                            type="cons"
                                            indexCard={indexCard}
                                            selected={consSelected[index]}
                                        />
                                    )
                                })
                            }
                            <Add handleAdd={() => addAnswer('cons', index)}><span>+</span> Add another</Add>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default StepTwoCard;