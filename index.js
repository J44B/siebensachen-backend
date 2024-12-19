import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { userRouter } from './src/routes/indexRouters.js';
import './src/models/dbInit.js';
import './src/db/db.js';

const app = express();

app.use(
    cors({
        origin: '*',
    }),
);

app.use(morgan('dev'));

const port = process.env.PORT || 8080;

app.use(express.json());

// Routes

app.use('/users', userRouter);

// insert error handler

app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`),
);
