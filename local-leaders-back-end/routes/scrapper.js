const express = require('express');
const ProfileScrapper = require('../models/webScrapper');
const router = new express.Router();

router.get('/:leaderPath', async function(req, res) {
	try {
		let twitTrl = 'twitter';
		let path = req.params.leaderPath;
		console.log(path);
		let data = await ProfileScrapper.getProfileSrc(twitTrl, path);

		res.json(data);
	} catch (e) {
		console.log(e);
		res.send('from app -->', e);
	}
});

module.exports = router;
