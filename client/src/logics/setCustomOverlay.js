const setCustomOverlay = ({
	location,
	from,
	to,
	availableTimeStart,
	availableTimeEnd,
	maxStopTime,
	maxNum,
	closeOverlay,
}) => {
	const onlyStop = (availableTimeStart === 'X' && availableTimeEnd === 'X') ? true : false;
	const overlayBox = document.createElement('div');
	overlayBox.className = 'overlay-box' + (onlyStop ? " only-stop-by" : "");
	
	const titleArea = document.createElement('div');
	titleArea.className = 'overlay-title-area';
	
	const locationTitle = document.createElement('span');
	locationTitle.innerText = location;
	locationTitle.className = 'overlay-title';
	
	const closeBtn = document.createElement('span');
	closeBtn.className = 'close-btn';
	closeBtn.onclick = closeOverlay;
	
	titleArea.appendChild(locationTitle);
	titleArea.appendChild(closeBtn);
	
	const contentArea = document.createElement('div');
	contentArea.className = 'overlay-content-area';
	
	const locationFrom = document.createElement('p');
	locationFrom.innerText = '시작점 : '+from;
	locationFrom.className = 'overlay-from';
	
	const locationTo = document.createElement('p');
	locationTo.innerText = '종점 : ' + to;
	locationTo.className = 'overlay-to';
	
	const locationTime = document.createElement('p');
	locationTime.innerText = '허용시간대 : ' + (onlyStop ? "주차불가" : (availableTimeStart + ":00 - " + availableTimeEnd + ":00"));
	locationTime.className = 'overlay-time';
	
	const locationStopTime = document.createElement('p');
	locationStopTime.innerText = "최대시간 : " + (maxStopTime ? maxStopTime + "분" : "제한없음");
	locationStopTime.className = "overlay-stopTime";
	
	const locationPlaces = document.createElement('p');
	locationPlaces.innerText = '최대제한 : ' + maxNum + '대';
	locationPlaces.className = 'overlay-places';
	
	contentArea.appendChild(locationFrom);
	contentArea.appendChild(locationTo);
	contentArea.appendChild(locationTime);
	contentArea.appendChild(locationStopTime);
	contentArea.appendChild(locationPlaces);
	
	overlayBox.appendChild(titleArea);
	overlayBox.appendChild(contentArea);
	
	return overlayBox;
}
export default setCustomOverlay;