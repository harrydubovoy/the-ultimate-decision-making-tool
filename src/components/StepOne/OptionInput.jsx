import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { titleOptions } from '../../actions'


class OptionInput extends Component {

    constructor(props) {
        super(props)

        
        this.handleTitleOption = this.handleTitleOption.bind(this)
    }

    render() {

        const { index, placeholder, title } = this.props

        return (
            <div className="form-group">
                <label htmlFor={`option-${index}`}>Option {index + 1}:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id={`option-${index}`}
                    placeholder={placeholder}
                    value={title} 
                    onChange={ () => this.handleTitleOption(event, index) }
                />
            </div>      
        )
    }

    handleTitleOption(event, current) {
        this.props.titleOptions(event.target.value, current)
    }


}

const mapStateToProps = state => {
    return {
        options: state.options
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        titleOptions: bindActionCreators(titleOptions, dispatch)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(OptionInput);