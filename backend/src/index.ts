import express, { Express, Request, Response} from 'express';
import {connect} from './config/db'
import logger from 'morgan'
import dotenv from 'dotenv';
import cors from 'cors'



// importing Routes
import userRouter from './routes/userRouter'
import postRouter from './routes/postRouter'

dotenv.config();  


const app: Express = express();
const port  = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};


// Middleware for JSON parsing
app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"))

connect() //connect to the database


app.use('/api/user',userRouter);
app.use('/api/post',postRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

