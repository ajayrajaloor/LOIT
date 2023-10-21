import express, { Express, Request, Response } from 'express';
import {connect} from './config/db'
import dotenv from 'dotenv';

dotenv.config();

connect() //connect to the database

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

//lKeHMta4JLpOWsDN