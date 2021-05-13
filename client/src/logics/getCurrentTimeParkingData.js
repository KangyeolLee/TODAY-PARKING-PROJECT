import getCurrentTime from './getCurrentTime';

const getCurrentTimeParkingData = (parkingData) => {
	if(!parkingData) return;
	
	const currentTime = getCurrentTime();
	const currentHour = +currentTime.slice(11, 13);
		
	return parkingData.filter(data => {
		const { availableTimeStart, availableTimeEnd } = data;
		if( +availableTimeStart <= currentHour && currentHour <= +availableTimeEnd) {
			return data;
		}
		else if( availableTimeStart === 'X' && availableTimeEnd === 'X' ) {
			return data;
		}
	})
}

export default getCurrentTimeParkingData;