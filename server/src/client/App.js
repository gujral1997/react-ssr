import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import { fetchCurrentUser } from './actions'

const App = ({ route }) => <div>
    <Header />
    {renderRoutes(route.routes)}
</div>

export default {
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
    component: App
}