const express = require('express');
const app = express();
const cors = require('cors');
const scrapperRoutes = require('./routes/scrapper');
const mydbRoutes = require('./routes/leaders');

app.use(cors());
app.use(express.json());

app.use('/scrapper', scrapperRoutes);
app.use('/leaders', mydbRoutes);

app.use(function(err, req, res, next) {
	const status = err.status || 500;
	const message = err.message;
	return res.status(status).json({
		error: { message, status }
	});
});

app.listen(3002, function() {
	console.log('listing on 3002');
});

module.exports = app;
