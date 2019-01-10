import React from 'react';

const StepTwoCardAnswer = ({indexAnswer, type, indexCard, raitingAnswer, selected}) => {    

    return ( 
        <div className="form-group">
            <input type="text" className="form-control" placeholder="E.g. Spending more time with the kids" />
            <ul className="quiz-raiting">
                { [...new Array(11)].map((n, index) => {
                    const indexSelected = index  
                    return (
                        <li 
                            key={index} 
                            onClick={() => raitingAnswer(indexAnswer, indexCard, indexSelected, type ) }
                            className={ selected >= index ? 'selected' : '' }
                        >{index}</li>
                    )
                }) } 
            </ul>
        </div>
     );
}
 
export default StepTwoCardAnswer;