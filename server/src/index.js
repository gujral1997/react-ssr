import express from 'express'
import renderer from "./helpers/renderer"
const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get("/", (_req, res) => {
    res.send(renderer())
})

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`))
})