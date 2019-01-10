import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { deleteOption, addAnswer, raitingAnswer } from '../../actions'

import Card from './Card.jsx'


class Cards extends Component {

    constructor(props) {
        super(props)

        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handleAddAnswer = this.handleAddAnswer.bind(this)
        this.handleRaitingAnswer = this.handleRaitingAnswer.bind(this)
    }

    render() { 

        const options = this.props.options

        return ( 
            <React.Fragment>
                {
                    options.map((option, index) => {  
                        return <Card 
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
            </React.Fragment>
        )
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
        options: state.options
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        deleteOption: bindActionCreators(deleteOption, dispatch),
        addAnswer: bindActionCreators(addAnswer, dispatch),
        raitingAnswer: bindActionCreators(raitingAnswer, dispatch)        
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Cards)









            