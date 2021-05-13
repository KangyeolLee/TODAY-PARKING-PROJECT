const { kakao } = window;

const setPolylines = (geolocation) => {
	const linePaths = geolocation.map(data => [
		new kakao.maps.LatLng(data.startPos.y, data.startPos.x),
		new kakao.maps.LatLng(data.endPos.y, data.endPos.x),
		data.availableTimeStart,
		data.availableTimeEnd,
	]);
	
	const polylines = [];
	for(const linePath of linePaths) {
		const polyline = new kakao.maps.Polyline({
			path: linePath.slice(0, 2),
			strokeWeight: 15,
			strokeColor: (linePath[2] === 'X' && linePath[3] === 'X') ? "#F77204" : "#196bff",
			strokeOpacity: 0.45,
			strokeStyle: 'solid',
		});
			
		polylines.push(polyline);
	}
	
	return polylines;
};

export default setPolylines;