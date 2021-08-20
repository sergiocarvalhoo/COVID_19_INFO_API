import "reflect-metadata";
import express from 'express';
import "express-async-errors";
import path from 'path';
import "./database"
import cors from 'cors';

import { HandleExceptions } from './middleware/HandleExceptions'
import { routerAdministrator } from './routes/RoutesAdministrator';
import { routerBulletin } from './routes/RoutesBulletin';
import { routerNews } from "./routes/RoutesNews";
import { routerVaccinationLocation } from "./routes/RoutesVaccinationLocation";

require('dotenv').config()

const app = express();
const port = '3333';

app.use(cors());
app.use(express.json());

app.use(routerAdministrator)
app.use(routerBulletin)
app.use(routerNews)
app.use(routerVaccinationLocation)

app.use(HandleExceptions)

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(port, () => {
    console.log('Server is listening on: http://localhost:' + port)
});