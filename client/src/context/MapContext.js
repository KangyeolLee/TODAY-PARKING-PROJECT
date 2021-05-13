import React from 'react';

export const initialState = {
	latitude: 37.45639,
	longitude: 126.70528,
	kakaomap: null,
	kakao: window.kakao,
	polylines: null,
	markers: null,
	overlays: null,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case "CREATE_KAKAOMAP" :
			return {
				...state,
				kakaomap: action.payload,
			}
		
		case "CREATE_ONBOARD_INFO" :
			return {
				...state,
				polylines: action.polylines,
				markers: action.markers,
				overlays: action.overlays,
			}
			
		default :
			return state;
	}
}

export const MapContext = React.createContext(null);