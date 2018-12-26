
import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import scrollToComponent from 'react-scroll-to-component'

import StepOne from '../../components/StepOne/StepOne.jsx'
import StepTwo from '../../components/StepTwo/StepTwo.jsx'
import StepThree from '../../components/StepThree/StepThree.jsx'

class Layout extends Component {

    constructor(props) {
        super(props)

        this.state = {
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

        this.stepTwo = React.createRef()
        this.stepThree = React.createRef()

        this.handleTitleOption = this.handleTitleOption.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleAddAnswer = this.handleAddAnswer.bind(this)
        this.handleDeleteCard = this.handleDeleteCard.bind(this)
        this.handleRaitingAnswer = this.handleRaitingAnswer.bind(this)
        this.handleNextStep = this.handleNextStep.bind(this)
        this.handlerRestart = this.handlerRestart.bind(this)
        
    }      

    render() { 
        return ( 
            <div className="wrapper">
                <StepOne 
                    options={this.state.options} 
                    titleOption={this.handleTitleOption}  
                    addOption={this.handleAddOption}
                    nextStep={this.handleNextStep}
                    step={this.state.step}
                />
                <div ref={this.stepTwo}>
                    { this.state.step >= 2 ?                        
                            <StepTwo 
                                options={this.state.options}
                                addAnswer={this.handleAddAnswer}
                                raitingAnswer={this.handleRaitingAnswer}
                                deleteOption={this.handleDeleteCard}
                                nextStep={this.handleNextStep}   
                                step={this.state.step}  
                            />                        
                        :
                        null
                        
                    }
                </div>
                <div ref={this.stepThree}>
                    { this.state.step == 3 ?                        
                            <StepThree 
                                options={this.state.options}
                                restart={this.handlerRestart}
                            />                        
                        :
                        null
                    }
                </div>
                                            
            </div>
        );
    }

    handleTitleOption(event, current) {

        let options = this.state.options.map((option, index) => {
            if(current == index) {
                return Object.assign({}, option, {title: event.target.value})
            }
            return option
        })

        this.setState({options})               
    }

    handleAddOption() {

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

        let options = [...this.state.options, newOption]

        this.setState({options})       
          
    }

    handleAddAnswer(current, type) {

        let options = this.state.options.map((option, index) => {       

            if(current == index) {
                return Object.assign(
                    {}, 
                    option, 
                    {
                        answers: Object.assign(
                            {}, option.answers, { [type]: [...option.answers[type], 0]})
                    })                  
            }
       
            return Object.assign({}, option)
        })        

        this.setState({options})        
    }

    handleRaitingAnswer(selected, indexAnswer, type, indexCard) {
        
        const raitingAnswer = this.state.options.map((option, index) => {

            if(indexCard == index) {
                
                let answers = option.answers[type].map((answer, index) => {
                    if(indexAnswer == index) {
                        return selected
                    }
                    return answer
                })

                return Object.assign(
                    {}, 
                    option, 
                    {
                        answers: Object.assign(
                            {}, option.answers, { [type]: answers}
                        )
                    },
                    {
                        [type]: answers.reduce((a, b) => {
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
        
        
        this.setState({options})     

    }

    handleDeleteCard(id) {

        const options = this.state.options.filter(option => {
            return id != option.id;
        })

        this.setState({options}) 

    }

    handleNextStep() {

        const step = ++this.state.step

        const scrollTo = elem => {
            setTimeout(() => {
                scrollToComponent(elem, {
                    offset: -50,
                    align: 'top',
                    duration: 1500
                });
            }, 0)
        }        
        
        if(step == 2) scrollTo(this.stepTwo.current)
        else if(step == 3) scrollTo(this.stepThree.current)

        this.setState({step})

    }

    handlerRestart() {

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

        this.setState(state)

    }


}
 
export default Layout;