
import React, { Component } from 'react'
import { connect } from 'react-redux'
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

        this.handlerRestart = this.handlerRestart.bind(this)
        
    }      

    render() { 

        const step = this.props.step
        

        return ( 
            <div className="wrapper">
                <StepOne />
                <div ref={this.stepTwo}>
                    { step >= 2 ?                        
                            <StepTwo />                        
                        :
                        null                        
                    }
                </div>
                <div ref={this.stepThree}>
                    { step == 3 ?                        
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


    handleNextStep() {

        const step = ++this.state.step

        // const scrollTo = elem => {
        //     setTimeout(() => {
        //         scrollToComponent(elem, {
        //             offset: -50,
        //             align: 'top',
        //             duration: 1500
        //         });
        //     }, 0)
        // }        
        
        // if(step == 2) scrollTo(this.stepTwo.current)
        // else if(step == 3) scrollTo(this.stepThree.current)

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


const mapStateToProps = state => {
    return {
        step: state.step
    }
}

 
export default connect(mapStateToProps)(Layout)