// Startup point for client

import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Routes from './Routes'
import reducers from "./reducers"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

const store = createStore(reducers, {}, applyMiddleware(thunk))

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
