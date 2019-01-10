import uuidv4 from 'uuid/v4'

import { 
    NEXT_STEP,
    TITLE_OPTIONS,
    ADD_OPTIONS,
    DELETE_OPTIONS,
    ADD_ANSWER,
    RAITING_ANSWER,
    RESTART
} from '../constants'

const initialState = {
    options: [
        {
            title: '',
            placeholder: 'E.g. Moving to New York',
            answers: {
                pros: [0],
                cons: [0]                    
            },
            pros: 0,
            cons: 0,
            result: 0,
            id: uuidv4()         
        },
        {
            title: '',
            placeholder: 'E.g. Staying in Beijing',
            answers: {
                pros: [0],
                cons: [0]                    
            },
            pros: 0,
            cons: 0,
            result: 0,
            id: uuidv4()
        }
    ],
    step: 1           
}


export default (state = initialState, action) => {
    switch (action.type) {

        case NEXT_STEP:        
            return { ...state, step: ++state.step }

        case TITLE_OPTIONS:
            {
                const options = state.options.map((option, index) => {
                    if(action.payload.current == index) {
                        return Object.assign({}, option, {title: action.payload.title})
                    }
                    return option
                })
                return { ...state, options }
            }

        case ADD_OPTIONS:
            {
                const newOption = {
                    title: '',
                    placeholder: 'Entre your option...',
                    answers: {
                        pros: [0],
                        cons: [0]                    
                    },
                    pros: 0,
                    cons: 0,
                    result: 0,
                    id: uuidv4()
                }            
                
                const options = [...state.options, newOption]
                
                return { ...state, options }           
            }
            
        case DELETE_OPTIONS:
            {
                const options = state.options.filter(option => {
                    return action.payload.id != option.id;
                })
                return { ...state, options }
            }

        case ADD_ANSWER:
            {
                const options = state.options.map((option, index) => {       

                    if(action.payload.current == index) {
                        return Object.assign(
                            {}, 
                            option, 
                            {
                                answers: Object.assign(
                                    {}, option.answers, { [action.payload.type]: [...option.answers[action.payload.type], 0]})
                            })                  
                    }
               
                    return Object.assign({}, option)
                })

                return { ...state, options }
            }

        case RAITING_ANSWER:
            {                

                const raitingAnswer = state.options.map((option, index) => {

                    if(action.payload.indexCard == index) { 
                        
                        const answers = option.answers[action.payload.type].map((answer, index) => {
                            if(action.payload.indexAnswer == index) {
                                return action.payload.indexSelected
                            }
                            return answer
                        })
        
                        return Object.assign(
                            {}, 
                            option,
                            {
                                answers: Object.assign(
                                    {}, option.answers, { [action.payload.type]: answers}
                                )
                            },
                            {
                                [action.payload.type]: answers.reduce((a, b) => {
                                    return a + b;
                                })
                            },
                            {
        
                            }                                        
                        )
                    }
        
                    return Object.assign({}, option)
                }) 
        
                const result = raitingAnswer.map(option => { 
                    return option.pros - option.cons
                })
        
                const options = raitingAnswer.map((option, index) => {            
                    return Object.assign({}, option, { result: result[index] })
                })

                return { ...state, options }
            }

            case RESTART:
                {
                    const state = {
                        options: [
                            {
                                title: '',
                                placeholder: 'E.g. Moving to New York',
                                answers: {
                                    pros: [0],
                                    cons: [0]                    
                                },
                                pros: 0,
                                cons: 0,
                                result: 0          
                            },
                            {
                                title: '',
                                placeholder: 'E.g. Staying in Beijing',
                                answers: {
                                    pros: [0],
                                    cons: [0]                    
                                },
                                pros: 0,
                                cons: 0,
                                result: 0
                            }
                        ],
                        step: 1           
                    }
                    return { ...state, state }
                }

        default:
            return state
    }
}