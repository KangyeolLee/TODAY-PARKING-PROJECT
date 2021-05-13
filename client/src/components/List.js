import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BsInfoCircleFill,
  BsFillCursorFill,
} from "react-icons/bs";
import ToggleButton from './Button/ToggleButton';
import { MapContext } from "../context/MapContext";
import getGPS from "../logics/getGPS";
import getCurrentTimeParkingData from '../logics/getCurrentTimeParkingData';
import setPolylines from '../logics/setPolylines';
import setMarkerAndOverlay from '../logics/setMarkerAndOverlay';
import axios from 'axios';
import {FaParking} from "react-icons/fa";

const APIURL = `https://hackerton-today-parkzrhie.run.goorm.io`;

const List = () => {
	const { state, dispatch } = useContext(MapContext);
  	const { kakaomap, kakao, polylines, markers, overlays } = state;
  	const [toggleRealtime, setToggleRealtime] = useState(false);
  	const [toggleParking, setToggleParking] = useState(false);
	
	useEffect(async () => {
		const getAllParking = async () => {
			const geolocation = await axios.get(`api/parking/all`);
			console.log('inner : ', geolocation);
			return geolocation.data;
		}
			
		const geolocation = await getAllParking();
		
		console.log(geolocation);
		
		
		const parkingData = geolocation?.parkingData?.parkingData;
		const currentParkingData = getCurrentTimeParkingData(parkingData);
				
		const polylines = setPolylines(currentParkingData);
		const [markers, overlays] = setMarkerAndOverlay(currentParkingData);
		
		dispatch({ type: "CREATE_ONBOARD_INFO", polylines, markers, overlays });
	}, []);
	
	const toggleRealtimeRoad = () => {
		if(toggleRealtime) {
			kakaomap.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			setToggleRealtime(false);
		} else {
			kakaomap.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
			setToggleRealtime(true);
		}
	}
	
	const fetchClientLoc = async () => {
		try {
			const info = await getGPS();
			return info;
		} catch {
			const error = "GPS가 지원되지 않는 기기입니다.";
			return { error };
		}
	}
			
	const handleMoveMyLocation = async () => {
		const location = await fetchClientLoc();
		const { lat, lng, error } = location;
		
		if (error) {
			alert(error.error);
			return;
		}
		
		const newLocation = new kakao.maps.LatLng(lat, lng);
		kakaomap.panTo(newLocation);
	}
		
	const handleToggleDisplayParkingPlace = () => {
		if(toggleParking) {
			polylines.forEach(polyline => polyline.setMap(null));
			markers.forEach(marker => marker.setMap(null));
			overlays.forEach(overlay => overlay.setMap(null));
			
			setToggleParking(false);
		} else {
			if(!polylines) return;
			
			polylines.forEach(polyline => polyline.setMap(kakaomap));
			for(let i = 0; i < markers.length; i++) {
				markers[i].setMap(kakaomap);
				kakao.maps.event.addListener(markers[i], 'click', () => {
					overlays[i].setMap(kakaomap);
				});
			}
			
			setToggleParking(true);
		}
	}
	
	return (
		<StyledList>
			<ToggleWrapper>
				<li onClick={toggleRealtimeRoad}>
					<BsInfoCircleFill className="nav__icon"/>
					<span className="nav__list">실시간 교통 정보</span>
				</li>
				<ToggleButton toggleLabel="realtime" isChecked={toggleRealtime} onChange={toggleRealtimeRoad}/>
			</ToggleWrapper>
			
			<ToggleWrapper>
				<li onClick={handleToggleDisplayParkingPlace}>
					<FaParking className="nav__icon" />
					<span className="nav__list">주정차공간 탐색</span>
				</li>
				<ToggleButton toggleLabel="parking" isChecked={toggleParking} onChange={handleToggleDisplayParkingPlace} />
			</ToggleWrapper>
			
			
			<StyledDivider />

			
			<li onClick={handleMoveMyLocation}>
				<BsFillCursorFill className="nav__icon" />
				<span className="nav__list">현재 나의 위치</span>
			</li>
			
		</StyledList>
	)
}

export default List;

const ToggleWrapper = styled.div`
	display: flex;
	gap: 10px;
	justify-content: space-between;
	margin-bottom: 15px;

	li {
		display: flex;
		align-items: center;
	}
`
const StyledList = styled.ul`
	list-style-type: none;
	padding-left: 0;
	color: #fff;
	font-size: 1.2rem;
	font-weight: bold;
	font-family: 'Jua', sans-serif;

	li {
		list-style-position: inside;
	
		svg {
			margin-right: 10px;
		}
		
		&:hover {
			opacity: 0.85;
			cursor: pointer;
		}
	}

`

const StyledDivider = styled.div`
	border-bottom: 1px solid #fff;
	margin: 15px 0;
`;