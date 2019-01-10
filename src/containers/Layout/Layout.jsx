
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import scrollToComponent from 'react-scroll-to-component'

import { nextStep } from '../../actions'

import Options from '../../components/StepOne/Options.jsx'
import Cards from '../../components/StepTwo/Cards.jsx'
import Results from '../../components/StepThree/Results.jsx'
import Restart from '../Restart/Restart.jsx'
import Description from '../../components/Description/Description.jsx'
import NextStep from '../../components/Buttons/NextStep.jsx';




class Layout extends Component {

    constructor(props) {
        super(props)

        this.step2 = React.createRef()
        this.step3 = React.createRef()
        
        this.handleNextStep = this.handleNextStep.bind(this)
    }      

    render() { 

        const step = this.props.step        

        return ( 
            <div className="wrapper">
                <section className="quiz-section quiz-step">
                    <Description step={1}/>
                    <Options />
                    <NextStep 
                        handleNextStep={this.handleNextStep} 
                        nextStep={2} 
                        currentStep={step} 
                    />
                </section>                

                <div ref={this.step2}>
                    { step >= 2 ?                        
                        <section className="quiz-section quiz-step">
                            <Description step={2} />
                            <Cards />
                            <NextStep 
                                handleNextStep={this.handleNextStep} 
                                nextStep={3}
                                currentStep={step} 
                            />
                        </section>
                        :
                        null                        
                    }
                </div>
                <div ref={this.step3}>
                    { step == 3 ?
                        <React.Fragment>
                            <section className="quiz-section quiz-step">
                                <Description step={3}/>
                                <Results />
                            </section>
                            <Restart />                    
                        </React.Fragment>                                 
                        :
                        null
                    }
                </div>                                            
            </div>
        )
    }


    scrollTo(step) {
        const scrollTo = elem => {
            setTimeout(() => {
                scrollToComponent(elem, {
                    offset: -50,
                    align: 'top',
                    duration: 1500
                });
            }, 0)
        }        
        
        if(step == 2) scrollTo(this.step2.current)
        else if(step == 3) scrollTo(this.step3.current)
    }

    handleNextStep(step) {
        this.props.nextStep()
        this.scrollTo(step)
    }
}


const mapStateToProps = state => {
    return {
        step: state.step
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        nextStep: bindActionCreators(nextStep, dispatch)
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Layout)