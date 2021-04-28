const express = require('express');
const sldsAssets = '/node_modules/@salesforce-ux/design-system/assets';
const blockSdk = '/node_modules/blocksdk'; 
const services = '/services'; 

const app = express();
const port = process.env.PORT || 3000;

app.use('/slds', express.static(__dirname + sldsAssets));
app.use('/blocksdk', express.static(__dirname + blockSdk));
app.use('/services', express.static(__dirname + services));

app.get('/', (req, res) => {
    res.sendFile('./views/plainTextCustomBlock.html',{ root: __dirname });
});

app.get('/plaintextcustomblock', (req, res) => {
    res.sendFile('./views/plainTextCustomBlock.html',{ root: __dirname });
});

app.listen(port, () => console.log(`listening on port ${port}!`));