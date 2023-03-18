import axios from 'axios';
import { API_KEY } from './secret/secret.js';

class GoogleAPI {
	static async getLeaders(address) {
		const { data } = await axios({
			baseURL: 'https://www.googleapis.com/civicinfo/v2/representatives',
			method: 'get',
			params: {
				key: API_KEY,
				address: address,
				includeOffices: true,
				levels: [ 'locality', 'administrativeArea2' ]
			}
		});
		//isolate offices and officials
		let offices = data.offices;
		let officials = data.officials;

		//push only local offices
		//!how many leaders should i add? maybe its a feature?
		//office.levels[0] === 'administrativeArea1'
		let localOffices = [];
		offices.forEach((office) => {
			if (office.levels[0] === 'administrativeArea2' || office.levels[0] === 'locality') {
				localOffices.push(office);
			}
		});

		//better verison
		let allData = [];
		localOffices.forEach((office) => {
			for (let i = 0; i < office.officialIndices.length; i++) {
				let newVal = office.officialIndices[i];
				allData.push({ office: office.name, offical: officials[newVal] });
			}
		});

		return { localLeaders: allData, normInput: data.normalizedInput };
	}
}

export default GoogleAPI;
