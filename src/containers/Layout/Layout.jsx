
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
                    }
                },
                {
                    title: '',
                    placeholder: 'Staying in Beijing',
                    answers: {
                        pros: [0],
                        cons: [0]                    
                    }
                }
            ],
        }

        this.handleTitleOption = this.handleTitleOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleAddAnswer = this.handleAddAnswer.bind(this);

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
                />
                <StepThree />                             
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
            placeholder: 'Moving to New York',
            answers: {
                pros: [0],
                cons: [0]                    
            }
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


}
 
export default Layout;