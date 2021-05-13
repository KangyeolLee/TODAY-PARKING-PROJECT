// REST API ROUTING
import express from 'express';
import {
  getParkingAll,
  getParkingCurrent,
} from '../controllers/parkingController';
import {getWeather} from "../controllers/weatherController";
import {crawl} from "../controllers/testCrawling";


const apiRouter = express.Router();

apiRouter.get('/parking/all', getParkingAll);
apiRouter.get('/parking/current', getParkingCurrent);
apiRouter.get('/weather', crawl);

export default apiRouter;
