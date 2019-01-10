import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addOption, titleOptions } from '../../actions'

import OptionInput from './OptionInput.jsx'
import Add from '../Buttons/Add.jsx';


class Options extends Component {

    constructor(props) {
        super(props)

        this.handleTitleOption = this.handleTitleOption.bind(this)
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
                                <OptionInput 
                                    key={index} 
                                    index={index} 
                                    placeholder={option.placeholder}
                                    titleOption={this.handleTitleOption}
                                />
                            )
                        })
                    }
                    <Add handleAdd={this.handleAddOption}><span>+</span> Add another option</Add>
                </div>
            </React.Fragment>     
        )        
    }



    handleTitleOption(event, current) {
        this.props.titleOptions(event.target.value, current)
    }

    handleAddOption() {
        this.props.addOption()
    }
}




const mapStateToProps = state => {
    return {
        options: state.options
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        addOption: bindActionCreators(addOption, dispatch),
        titleOptions: bindActionCreators(titleOptions, dispatch)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Options)