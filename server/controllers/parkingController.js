const db = require('../database/');

// 모든 주정차가능 위치
export const getParkingAll = (req, res) => {
  const parkingData = db.getAllData()
  return res.json({ parkingData });
};
// 현재 시각에 주정차 가능 위치
export const getParkingCurrent = async (req, res) => {
    const parkingData = db.getAllData().parkingData
    const curr = new Date();
    const utc = 
          curr.getTime() + 
          (curr.getTimezoneOffset() * 60 * 1000);
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(utc + (KR_TIME_DIFF)).getHours();
    const currentParkingData = parkingData.filter( (el) => {
        if (Number(el.availableTimeStart) < Number(el.availableTimeEnd)){
            return Number(el.availableTimeStart) <= Number(kr_curr) <= Number(el.availableTimeEnd)
        }else{
            return Number(kr_curr) <= Number(el.availableTimeEnd)
        }
    });
    return res.json({currentParkingData});
};

