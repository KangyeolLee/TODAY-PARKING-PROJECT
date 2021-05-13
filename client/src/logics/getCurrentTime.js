const getCurrentTime = () => {
	const timezoneOffset = new Date().getTimezoneOffset() * 60000;
	const timezoneDate = new Date(Date.now() - timezoneOffset);
	
	const timeformat = timezoneDate.toISOString().split('T');
	const date = timeformat[0];
	const time = timeformat[1].slice(0, 5);	

	return date + " " + time
}

export default getCurrentTime;