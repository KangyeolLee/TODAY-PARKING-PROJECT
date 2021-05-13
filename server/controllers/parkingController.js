const db = require('../database/');

// 모든 주정차가능 위치
export const getParkingAll = (req, res) => {
  const parkingData = db.getAllData()
  return res.json({ parkingData });
};
// 현재 시각에 주정차 가능 위치
export const getParkingCurrent = async (req, res) => {};

