import express from 'express';
import cors from 'cors';
import userRoute from './routes/users.js';
import hotetRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import authRoute from './routes/auth.js';
import cookieParser from 'cookie-parser';
import connect from './mongodb.js';

const app = express();

// middlewares
app.use(cookieParser());
app.use(express.json());

app.use(cors());

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotetRoute);
app.use('/api/rooms', roomRoute);
app.use('/api/users', userRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errMessage = err.message || 'Something went wrong';

    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errMessage,
        stack: err.stack,
    });
});

app.listen(8080, () => {
    connect();
    console.log('Connect to port 8080 ');
});
