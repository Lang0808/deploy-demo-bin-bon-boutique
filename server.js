const app = require('./src/app');
const path = require('path');
const port = process.env.PORT || 3001;
const express = require('express');
app.use(express.static(path.join(__dirname, "client/build")));
const fs = require('fs');
const https = require('https');


if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get('/api/test', (req, res) => {
    res.json({ message: 'I am a message from server' });
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})

app.get('/', (req, res) => {
    res.send({ message: "Hello world" });
})

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpOptions, app).listen(port, function() {
    console.log('Serving');
});

app.listen(port, () => {
    console.log(`App listening on ${port}`)
});

// https://www.youtube.com/watch?v=USrMdBF0zcg