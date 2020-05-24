import express from 'express'
import { matchRoutes } from 'react-router-config'
import proxy from 'express-http-proxy'

import renderer from "./helpers/renderer"
import createStore from './helpers/createStore'
import Routes from './client/Routes'

const app = express()

app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}))

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get("*", (req, res) => {
    const store = createStore(req)

    const promises = matchRoutes(Routes, req.path).map(({ route }) => {
        return route?.loadData ? route.loadData(store) : null
    })

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.notFound) {
            res.status(404);
        }
        res.send(content)
    })
})

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`))
})