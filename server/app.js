import express from 'express';
import path from 'path';
import morgan from 'morgan';
import apiRouter from './routers/apiRouter';
import globalRouter from './routers/globalRouter';
import cors from 'cors';

const app = express();
const logger = morgan('dev');

app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', apiRouter);

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/', (req, res, next) => {
	res.send(express.static(path.join(__dirname, '../../client/build/index.html')));
})

// app.use('/', globalRouter);

export default app;
