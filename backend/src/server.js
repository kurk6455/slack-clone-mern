import { ENV } from './config/env.js';
import express from 'express';
import { connectDB } from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js"

import chatRoutes from './routes/chat.route.js';



const app = express();

app.use(express.json());
app.use(clerkMiddleware()) //add req.auth

app.get('/', (req, res) => {
    res.send("Hello world");
})

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes);



const startServer = async () => {
    try{
        await connectDB();
        if(ENV.NODE_ENV !== 'production'){
            app.listen(ENV.PORT, () => {
                console.log("Server running in port ", ENV.PORT);
            })
        }
    }catch(error){
        console.error("Error occured at startServer: ", error);
        process.exit(1);
    }
}
startServer();
export default app;