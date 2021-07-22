import "reflect-metadata";
import express from 'express';
import "express-async-errors";

import "./database"

import { HandleExceptions } from './middleware/HandleExceptions'
import { router } from './routes';

require('dotenv').config()

const app = express();
const port = '3333';

app.use(express.json());

app.use(router)

app.use(HandleExceptions)

app.listen(port, () => {
    console.log('Server is listening on: http://localhost:' + port)
}); 