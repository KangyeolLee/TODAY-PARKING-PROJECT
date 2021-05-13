const getGPS = async () => {
	return new Promise((resolve, reject) => {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(
				(pos) => {
					resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude });
				},
				(err) => {
					reject('cannot');
				}
			)
		} else{
			reject('cannot');
		}
	})
}
export default getGPS;