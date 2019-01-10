import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { nextStep, addOption } from '../../actions'

import StepOneInput from './StepOneInput.jsx'

class StepOneOption extends Component {

    constructor(props) {
        super(props)

        this.handleNextStep = this.handleNextStep.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    render() {

        const options = this.props.options

        return (

            <React.Fragment>

                <div className="quiz-form">
                    {
                        options.map( (option, index) => {
                            return (
                                <StepOneInput 
                                    key={index} 
                                    index={index} 
                                    placeholder={option.placeholder}
                                />
                            )    
                        })
                    }

                    <button 
                        type="submit" 
                        className="btn btn-primary btn-rounded btn-outline-primary"
                        onClick={this.handleAddOption}
                    > <span>+</span> Add another option</button>
                </div>

                <div className="quiz-next-step">
                    <button 
                        type="button" 
                        className="btn btn-dark"
                        onClick={this.handleNextStep}
                        disabled={this.props.step > 1}
                    >I'm ready for Step 2</button>
                </div>

            </React.Fragment>
     
        )        
    }


    handleAddOption() {
        this.props.addOption()
    }

    handleNextStep() {
        this.props.nextStep()
    }

}


const mapStateToProps = state => {
    return {
        options: state.options,
        step: state.step
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        nextStep: bindActionCreators(nextStep, dispatch),
        addOption: bindActionCreators(addOption, dispatch),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(StepOneOption)