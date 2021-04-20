const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.sendFile('./views/plain-text.html',{ root: __dirname });
});

app.get('/blocksdk', (req, res) => {
    res.sendFile('./scripts/blocksdk.js',{ root: __dirname });
});

app.get('/plain-text', (req, res) => {
    res.sendFile('./views/plain-text.html',{ root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));