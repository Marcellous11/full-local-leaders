function getDatabaseUri() {
	// return process.env.NODE_ENV === 'test' ? 'leaders_test' : process.env.DATABASE_URL || 'leaders';
	return process.env.NODE_ENV === 'test' ? 'leaders_test' : process.env.DATABASE_URL || 'leaders';
}
module.exports = {
	getDatabaseUri
};
