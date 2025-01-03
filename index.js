import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { userRouter } from './src/routes/indexRouters.js';
import config from './src/config/config.js';
import './src/models/dbInit.js';
import './src/db/db.js';
import { errorHandler } from './src/middlewares/indexMiddlewares.js';

const app = express();

app.use(
    cors({
        origin: config.corsOrigin,
        credentials: true,
    }),
);

app.use(morgan('dev'));
app.use(cookieParser());

const port = process.env.PORT || 8080;

app.use(express.json());

// Routes

app.use('/users', userRouter);

app.use(errorHandler);

app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
);
