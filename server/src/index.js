import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express()

app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    const content = renderToString(<Home />);
    const html = `
        <html>
            <head></head>
            <body>
                <div id ="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
    res.send(html)
});

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`));
})