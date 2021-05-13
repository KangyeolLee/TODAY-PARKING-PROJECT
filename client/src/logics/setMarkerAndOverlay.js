import markerImg from "../context/Marker";
import setCustomOverlay from "./setCustomOverlay";

const { kakao } = window;

const setMarkerAndOverlay = (geolocation) => {
	if(!geolocation) return;
	
	const markerPositions = geolocation.map(data => [
		(data.startPos.y + data.endPos.y) / 2,
		(data.startPos.x + data.endPos.x) / 2,
	]);
	
	const markers = [];
	const overlays = [];
	
	for(const [idx, position] of markerPositions.entries()) {
		const [lat, lng] = position;
		const pos = new kakao.maps.LatLng(lat, lng);
		const marker = new kakao.maps.Marker({
			position: pos,
			image: markerImg,
		});
			
		const closeOverlay = () => {
			overlay.setMap(null);
		}
			
		const content = setCustomOverlay({ ...geolocation[idx], closeOverlay });
		const overlay = new kakao.maps.CustomOverlay({
			content,
			position: pos,
		});
			
		overlays.push(overlay);
		markers.push(marker);
	}
	
	return [markers, overlays];
};

export default setMarkerAndOverlay;