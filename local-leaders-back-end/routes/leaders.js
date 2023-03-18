const express = require('express');
const router = new express.Router();
const Leaders = require('../models/leaders');

/** Description: Gets all leaders from DB */
router.get('/', async function(req, res) {
	try {
		console.log(process.env);
		let data = await Leaders.getLeaders();
		res.json({ data });
	} catch (e) {
		console.log(e);
		res.send('FROM routes/mydb', e);
	}
});

/** Description: Gets 1 leader based on twitid argument */
router.get('/:twitId', async function(req, res) {
	try {
		let id = req.params.twitId;
		const data = await Leaders.getLeader(id);

		res.json({ data });
	} catch (e) {
		console.log(e);
		res.send('FROM routes/mydb', e);
	}
});

/** Description: Uses "Leaders.addLeader" to add twitid and imgUrl to DB */
router.post('/', async function(req, res, next) {
	try {
		const data = req.body;

		if (!data.imgUrl) {
			console.log('no url');
			return res.json({ error: 'No img url' });
		}
		let answer = await Leaders.addLeader(data);
		console.log('answer-->', answer);

		if (answer.name === 'error') {
			next(answer.detail);
		}

		res.json({ answer });
	} catch (e) {
		console.log(e);
		res.send('from app -->', e);
	}
});

module.exports = router;
