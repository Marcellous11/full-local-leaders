import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import LeaderProfile from './LeaderProfile';
import Leaders from './Leaders';
import { v4 as uuid } from 'uuid';
import Context from '../Context';
import axios from 'axios';
import Sorry from './Sorry.js';

const AppRoutes = () => {
	const { leaders, getProPic, scrappedObj, getleaders, address } = useContext(Context);

	useEffect(
		() => {
			//PURPOSE: Reset leaders Obj on page refresh
			if (localStorage.address) {
				getleaders(localStorage.address);
			}
		},
		[ localStorage.address ]
	);

	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/leaders" element={<Leaders />} />
			<Route path="/leader/:id" element={<LeaderProfile />} />
			<Route path="/*" element={<Sorry />} />
		</Routes>
	);
};

export default AppRoutes;
