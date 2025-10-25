import { ENV } from './config/env.js';
import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(ENV.PORT, () => {
    console.log("Server running in port ", ENV.PORT);
    connectDB();
})