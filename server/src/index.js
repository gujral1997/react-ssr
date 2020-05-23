import express from 'express'
import renderer from "./helpers/renderer"
import createStore from './helpers/createStore'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get("*", (req, res) => {
    const store = createStore()

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route?.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {
        res.send(renderer(req, store))
    })
})

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`))
})