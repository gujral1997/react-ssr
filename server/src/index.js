const express = require('express');
const app = express();
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
    const content = renderToString(<Home />);
    res.send(content)
});

app.listen(PORT, () => {
    console.log((`Listening to the port ${PORT}`));
})