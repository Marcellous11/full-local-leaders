const { Client } = require('pg');
const { getDatabaseUri } = require('./config');
let db;

if (process.env.NODE_ENV === 'production') {
	db = new Client({
		connectionString: getDatabaseUri(),
		ssl: {
			rejectUnauthorized: false
		}
	});
} else {
	db = new Client({
		connectionString: getDatabaseUri()
	});
}

// const db = new Client({
// 	connectionString: 'leaders'
// });

db.connect();
module.exports = db;
