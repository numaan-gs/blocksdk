const express = require('express');
const sldsAssets = '/node_modules/@salesforce-ux/design-system/assets';
const blockSdk = '/node_modules/blocksdk'; 

const app = express();
const port = process.env.PORT || 3000;

app.use('/slds', express.static(__dirname + sldsAssets));
app.use('/blocksdk', express.static(__dirname + blockSdk));

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