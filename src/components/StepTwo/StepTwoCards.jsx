import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { nextStep, deleteOption, addAnswer, raitingAnswer } from '../../actions'

import StepTwoCard from './StepTwoCard.jsx'


class SrepTwoCards extends Component {

    constructor(props) {
        super(props)

        this.handleNextStep = this.handleNextStep.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddAnswer = this.handleAddAnswer.bind(this)
        this.handleRaitingAnswer = this.handleRaitingAnswer.bind(this)
    }

    render() { 

        const options = this.props.options
        const step = this.props.step

        return ( 
            <React.Fragment>
                {
                    options.map((option, index) => {  
                        return <StepTwoCard 
                            key={index}
                            title={option.title}
                            index={index}
                            id={option.id}
                            answers={option.answers}
                            addAnswer={this.handleAddAnswer}
                            deleteOption={this.handleDeleteOption}
                            raitingAnswer={this.handleRaitingAnswer}
                            prosSelected={option.answers.pros}
                            consSelected={option.answers.cons}
                        />
                    })
                }            

                <div className="quiz-next-step">
                    <button 
                        type="button" 
                        className="btn btn-dark"
                        onClick={this.handleNextStep}
                        disabled={step > 2}
                    >I'm ready for Step 3</button>
                </div>
            </React.Fragment>
        )
    }

    handleNextStep() {
        this.props.nextStep()
    }

    handleDeleteOption(id) {
        this.props.deleteOption(id)
    }

    handleAddAnswer(type, current) {
        this.props.addAnswer(type, current)
    }

    handleRaitingAnswer(indexAnswer, indexCard, indexSelected, type) {
        this.props.raitingAnswer(indexAnswer, indexCard, indexSelected, type) 
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
        deleteOption: bindActionCreators(deleteOption, dispatch),
        addAnswer: bindActionCreators(addAnswer, dispatch),
        raitingAnswer: bindActionCreators(raitingAnswer, dispatch)        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SrepTwoCards)









            