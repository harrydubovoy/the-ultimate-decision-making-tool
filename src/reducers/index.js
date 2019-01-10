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
                const { title, current } = action.payload
                const options = state.options.map((option, index) => {
                    if(current == index) {
                        return {...option, title}
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
            const id = action.payload.id
            {
                const options = state.options.filter(option => {
                    return id != option.id;
                })
                return { ...state, options }
            }

        case ADD_ANSWER:
            {
                const {type, current} = action.payload
                const options = state.options.map((option, index) => {
                    if(current == index) {
                        return {
                            ...option, 
                            answers: {
                                ...option.answers,
                                [type]: [...option.answers[type], 0]
                            }}               
                    }               
                    return {...option}
                })
                return { ...state, options }
            }

        case RAITING_ANSWER:
            {
                
                const { 
                    indexAnswer,
                    indexCard,
                    indexSelected,
                    type 
                } = action.payload
                
                const raitingAnswer = state.options.map((option, index) => {

                    if(indexCard == index) { 
                        
                        const answers = option.answers[type].map((answer, index) => {
                            if(indexAnswer == index) {
                                return indexSelected
                            }
                            return answer
                        })        

                        return {
                            ...option,
                            answers: {
                                ...option.answers,
                                [type]: answers
                            },
                            [type]: answers.reduce((a, b) => {
                                return a + b;
                            })
                        }
                    }
        
                    return {...option}
                }) 
        
                const result = raitingAnswer.map(option => { 
                    return option.pros - option.cons
                })
        
                const options = raitingAnswer.map((option, index) => {            
                    return { ...option, result: result[index] }
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