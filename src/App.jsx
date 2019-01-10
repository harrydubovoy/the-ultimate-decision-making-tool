import React from "react"

import Layout from "./components/Layout/Layout.jsx";

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
            </main>            

        )
    }
}

export default App