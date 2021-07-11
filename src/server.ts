import "reflect-metadata";
import express from 'express';

import "./database"

import { router } from './routes';


const app = express();
const port = '3333';

app.use(express.json());

app.use(router)

app.listen(port, () => {
    console.log('Server is listening on: http://localhost:' + port)
}); 