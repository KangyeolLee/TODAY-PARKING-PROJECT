import React, { useEffect, useContext } from 'react';
import { MapContext } from './context/MapContext';

const Map = () => {
	const { state, dispatch } = useContext(MapContext);
	const { latitude, longitude, kakao } = state;
	
	useEffect(() => {
		const container = document.getElementById("kakaomap");
		const options = {
			center: new kakao.maps.LatLng(latitude, longitude),
			level: 3,
		};
		const map = new kakao.maps.Map(container, options);
		
		kakao.maps.event.addListener(map, 'zoom_changed', () => {
			const level = map.getLevel();
			console.log(level);
		});
		
		dispatch({ type: "CREATE_KAKAOMAP", payload: map });
	}, []);
	
	return <div id="kakaomap" style={{ width: "100%", height: "100%" }}></div>
};

export default Map;