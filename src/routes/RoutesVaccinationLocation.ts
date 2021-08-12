import { Router } from "express";

import { CreateVaccinationLocationController } from '../controllers/VaccinationLocation/CreateVaccinationLocationController';
import { verifyTokenAuthentication } from '../middleware/CheckToken'

const routerVaccinationLocation = Router();

const createVaccinationLocationController = new CreateVaccinationLocationController();

routerVaccinationLocation.post('/createvaccinationlocation',verifyTokenAuthentication, createVaccinationLocationController.handle);


export { routerVaccinationLocation }
