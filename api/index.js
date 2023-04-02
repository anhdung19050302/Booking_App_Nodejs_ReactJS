import express from 'express';
import userRoute from './routes/users.js';
import hotetRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
import authRoute from './routes/auth.js';

import connect from './mongodb.js';
const app = express();

// middlewares

app.use('/api/auth', authRoute);
app.use('/api/hotels', hotetRoute);
app.use('/api/rooms', roomRoute);
app.use('/api/users', userRoute);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8080, () => {
    connect();
    console.log('Connect to port 8080 ');
});
