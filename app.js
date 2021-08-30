const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Ya quiero una pta Startup');
});

app.get('/demo', (req, res) => {
	res.set('X-full-stacl', '4life');
	res.status(418);
	res.send('I prefer coffe');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
