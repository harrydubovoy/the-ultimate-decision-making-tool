import React, { Component } from 'react'
import { connect } from 'react-redux'

import StepThreeCardResult from './StepThreeCardResult.jsx'


class StepThreeResults extends Component { 

    render() { 

        const options = this.props.options

        return ( 
            <div className="row">
                {
                    options.map((option, index) => {

                        let pros = option.answers.pros.length,
                            cons = option.answers.cons.length,                     
                            maxRaiting = 0,
                            result = option.result,
                            chartLength

                        maxRaiting = pros > cons ? pros*10 : cons*10
                        chartLength = (Math.abs(result)/maxRaiting)*100

                        return <StepThreeCardResult
                            key={index}
                            index={index}
                            pros={option.pros} 
                            cons={option.cons}
                            answers={option.answers}
                            maxRaiting={maxRaiting}
                            title={option.title}
                            result={option.result}
                            chartLength={chartLength}
                        />

                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        options: state.options
    }
}
 
export default connect(mapStateToProps)(StepThreeResults)