import express from 'express';
import { ENV } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.listen(ENV.PORT, () => {
    console.log("Server running in port ", ENV.PORT);
})