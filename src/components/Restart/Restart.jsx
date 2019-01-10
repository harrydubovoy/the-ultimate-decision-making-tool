import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { restart } from '../../actions'

class Restart extends Component {

    constructor(props) {
        super(props)

        this.handleRestart = this.handleRestart.bind(this)
    }

    render() { 
        return ( 
            <div className="wrapper">
                <div className="quiz-finished__text">And, if you're ready to take action in your life, don't wait any longer. </div>
                <div className="quiz-restart">
                    <button type="submit" className="btn btn-primary" onClick={this.handleRestart}>Restart</button>
                </div>        
            </div>
        )
    }

    handleRestart() {
        this.props.restart()
    }
}

const mapDispatchToProps = dispatch => {  
    return {
        restart: bindActionCreators(restart, dispatch),      
    }
}
 
export default connect(null, mapDispatchToProps)(Restart)