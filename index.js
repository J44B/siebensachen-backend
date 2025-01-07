import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { userRouter, eventRouter } from './src/routes/indexRouters.js';
import config from './src/config/config.js';
import './src/models/dbInit.js';
import './src/db/db.js';
import { errorHandler } from './src/middlewares/indexMiddlewares.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(
    cors({
        origin: config.corsOrigin,
        credentials: true,
    }),
);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

// Routes

app.use('/users', userRouter);
app.use('/events', eventRouter);

app.use(errorHandler);

app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
);
