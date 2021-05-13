import express from 'express';
import morgan from 'morgan';
import apiRouter from './routers/apiRouter';
import globalRouter from './routers/globalRouter';
import cors from 'cors';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', globalRouter);
app.use('/api', apiRouter);

export default app;
