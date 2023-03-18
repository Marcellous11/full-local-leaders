const db = require('../db');

class Users {
	static async getUsers() {
		const text = 'SELECT * FROM users';
		const d = await db.query(text);
		console.log(d.rows);
		let data = d.rows;
		return data;
	}
}

module.exports = Users;
