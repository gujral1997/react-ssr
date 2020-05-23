// Startup point for client

import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from "axios"
import Routes from './Routes'
import reducers from "./reducers"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { renderRoutes } from "react-router-config"

const axiosInstance = axios.create({
    baseURL: '/api'
})

const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)
