import './App.css';
import { useEffect, useState } from 'react';
import GoogleAPI from './apis/googleAPI';
import Context from './Context';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import AppRoutes from './modules/AppRoutes';
import Navbar from './modules/Navbar';
import axios from 'axios';
import MyDB from './apis/myDB';

function App() {
	const [ leaders, setLeaders ] = useState();
	const [ address, setAddress ] = useState(localStorage.address);
	const [ scrappedObj, setScrappedObj ] = useState({});
	const [ badSearch, setBadSearch ] = useState(false);

	useEffect(
		() => {
			//PURPOSE: If at any point there is something in the scrappedObj, send it to db
			if (Object.keys(scrappedObj).length !== 0) {
				console.log(scrappedObj);
				sendScrappedObjToDB();
			}
		},
		[ scrappedObj ]
	);
	useEffect(
		() => {
			// getLeaderFromMyDB('god').then((data) => console.log(data));
			if (leaders) {
				determineIfScrapperIsNeeded();
			}
		},
		[ leaders ]
	);

	/** DESCRIPTION: Calls to Google Civic Info API, sets data to leaders state */
	const getleaders = async (address) => {
		try {
			let data = await GoogleAPI.getLeaders(address);
			setLeaders(data);
		} catch (e) {
			console.log(e);
			console.log(e.message);
		}
	};

	/** DESCRIPTION: Sends webScrapper to designated twitter accounts for profile pic, saves data to scrappedObj */
	const twitterScrapper = async (twitid) => {
		let { data } = await MyDB.sendScrapper(twitid);
		setScrappedObj((oldData) => {
			return { ...oldData, [twitid]: data };
		});
	};

	/** DESCRIPTION: Asks "If leader has twitter id, is it in my Db". If not there scrapper is deployed */
	const determineIfScrapperIsNeeded = () => {
		leaders.localLeaders.forEach((i) => {
			if (i.offical.channels) {
				i.offical.channels.forEach((i) => {
					if (i.type === 'Twitter') {
						console.log('In loop-->', i.id);

						getLeaderFromMyDB(i.id).then(({ data }) => {
							if (data) {
								console.log('good data');
							} else {
								console.log('Send Srapper');
								twitterScrapper(i.id);
							}
						});
					}
				});
			}
		});
	};

	/** DESCRIPTION: Get individual leader from myDB */
	const getLeaderFromMyDB = async (twitid) => {
		let { data } = await MyDB.getLeader(twitid);
		return data;
	};

	/** DESCRIPTION: Adds obj data into database */
	const addDataToDB = async (obj) => {
		await MyDB.postLeader(obj);
	};

	/** DESCRIPTION: Looks through scrappedObj and calls "addDataTODB" on all key:value pairs */
	const sendScrappedObjToDB = () => {
		console.debug('Addeding to DB');
		for (let obj in scrappedObj) {
			console.log({ twitid: obj, imgUrl: scrappedObj[obj] });
			addDataToDB({ twitid: obj, imgUrl: scrappedObj[obj] });
		}
	};

	return (
		<div className="App">
			<Context.Provider
				value={{
					leaders,
					getleaders,
					scrappedObj,
					setLeaders,
					address,
					setAddress,
					getLeaderFromMyDB
				}}
			>
				<BrowserRouter>
					<Navbar />
					<AppRoutes />
				</BrowserRouter>
			</Context.Provider>
		</div>
	);
}

export default App;
