const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Everyone! Second change to verify all stages are working fine'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
