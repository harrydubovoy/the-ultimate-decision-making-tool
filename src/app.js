import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'

import App from './App.jsx'
import storeConfig from './store.config'

const store = storeConfig()


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)