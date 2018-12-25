import React from "react"

import Layout from "./containers/Layout/Layout.jsx";

class App extends React.Component {
    render() {
        return(

            <main className="quiz-page">
                <div className="page-title">
                    <div className="wrapper">
                        <h1 className="h1 quiz-title">The Ultimate Decision-Making Tool</h1>
                    </div>
                </div>
                <Layout />
                <div className="wrapper">        
                    <div className="quiz-finished__text">And, if you're ready to take action in your life, don't wait any longer. </div>
                    <div className="quiz-restart">
                        <button type="submit" className="btn btn-primary">Restart</button>
                    </div>        
                </div>
            </main>            

        )
    }
}

export default App