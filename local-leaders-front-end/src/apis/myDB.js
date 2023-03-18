import axios from 'axios';

let backEndServerAddress = 'http://127.0.0.1:3002';

class MyDB {
	static async getLeader(twitid) {
		return await axios.get(`${backEndServerAddress}/leaders/${twitid}`);
	}

	static async postLeader(obj) {
		return await axios.post(`${backEndServerAddress}/leaders`, obj);
	}

	static async sendScrapper(twitid) {
		return await axios.get(`${backEndServerAddress}/scrapper/${twitid}`);
	}
}

export default MyDB;
