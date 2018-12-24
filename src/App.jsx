import React from "react"

import Header from "./components/Header/Header.jsx";
import Layout from "./containers/Layout/Layout.jsx";
import Footer from "./components/Footer/Footer.jsx";

class App extends React.Component {
    render() {
        return(

            <main className="quiz-page">

                <Header />

                <Layout />

                <Footer />              

            </main>            

        )
    }
}

export default App