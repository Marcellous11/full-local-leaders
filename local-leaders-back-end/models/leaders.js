const db = require('../db');

class Leaders {
	// get all leaders from database
	static async getLeaders() {
		const text = 'SELECT * FROM leaders';

		const d = await db.query(text);
		console.log(d.rows);
		let data = d.rows;
		return data;
	}

	// get 1 leader by twitId
	static async getLeader(tiwitId) {
		// console.log(db);
		try {
			const text = 'SELECT * FROM leaders WHERE twitid = $1';
			const values = [ tiwitId ];

			const d = await db.query(text, values);
			let data = d.rows[0];

			console.log('MODEL/Leaders.getLeader   -    value of data------->', data);
			if (data.length === 0) return 'Leader not found ';
			return data;
		} catch (e) {
			console.log('From model-->', e);
		}
	}

	//add leader into database
	static async addLeader(leaderObj) {
		try {
			console.log(leaderObj.twitid, leaderObj.imgUrl);
			const text = 'INSERT INTO leaders(twitid, imgUrl) VALUES($1,$2)';
			const values = [ leaderObj.twitid, leaderObj.imgUrl ];
			console.log(values);

			const d = await db.query(text, values);
			console.log(d.command);
			let data = d.command;

			return data;
		} catch (e) {
			console.log('From model-->', e);
			return e;
		}
	}
}

module.exports = Leaders;
