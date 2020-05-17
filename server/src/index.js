import express from 'express'
import renderer from "./helpers/renderer"
import createStore from './helpers/createStore'
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get("*", (req, res) => {
    const store = createStore()
    res.send(renderer(req, store))
})

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`))
})