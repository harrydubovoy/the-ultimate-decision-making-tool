
import React, { Component } from 'react'

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
                    placeholder: 'Moving to New York',
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
                    placeholder: 'Staying in Beijing',
                    answers: {
                        pros: [0],
                        cons: [0]                    
                    },
                    pros: 0,
                    cons: 0,
                    result: 0
                }
            ]            
        }

        this.handleTitleOption = this.handleTitleOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAddAnswer = this.handleAddAnswer.bind(this);
        this.handleRaitingAnswer = this.handleRaitingAnswer.bind(this);
        
    }      

    render() { 
        return ( 
            <div className="wrapper">
                <StepOne 
                    options={this.state.options} 
                    titleOption={this.handleTitleOption}  
                    addOption={this.handleAddOption}
                />
                <StepTwo 
                    options={this.state.options}
                    addAnswer={this.handleAddAnswer}
                    raitingAnswer={this.handleRaitingAnswer}                    
                />
                <StepThree options={this.state.options} />                             
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
            result: 0
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


}
 
export default Layout;