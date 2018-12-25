import React from 'react';

const StepTwoCardAnswer = ({indexAnswer, typeAnswer, indexCard, raitingAnswer}) => {

    const raiting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return ( 
        <div className="form-group">
            <input type="text" className="form-control" placeholder="E.g. Spending more time with the kids" />
            <ul className="quiz-raiting">
                { raiting.map(item => {
                    return <li key={item} onClick={() => raitingAnswer(item, indexAnswer, typeAnswer, indexCard) }>{item}</li>
                }) } 
            </ul>
        </div>
     );
}
 
export default StepTwoCardAnswer;