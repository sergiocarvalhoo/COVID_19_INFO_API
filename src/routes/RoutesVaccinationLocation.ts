import { Router } from "express";

import { CreateVaccinationLocationController } from '../controllers/VaccinationLocation/CreateVaccinationLocationController';
import { DeleteVaccinationLocationController } from "../controllers/VaccinationLocation/DeleteVaccinationLocationController";
import { UpdateVaccinationLocationController } from "../controllers/VaccinationLocation/UpdateVaccinationLocationController";
import { verifyTokenAuthentication } from '../middleware/CheckToken'
import {ReadVaccinationLocationController} from '../controllers/VaccinationLocation/ReadVaccinationLocationController'

const routerVaccinationLocation = Router();

const createVaccinationLocationController = new CreateVaccinationLocationController();
const updateVaccinationLocationController = new UpdateVaccinationLocationController();
const deleteVaccinationLocationController = new DeleteVaccinationLocationController();
const readVaccinationLocationController = new ReadVaccinationLocationController();

routerVaccinationLocation.post('/createvaccinationlocation', verifyTokenAuthentication, createVaccinationLocationController.handle);
routerVaccinationLocation.put('/updatevaccinationlocation', verifyTokenAuthentication, updateVaccinationLocationController.handle);
routerVaccinationLocation.delete('/deletevaccinationlocation', verifyTokenAuthentication, deleteVaccinationLocationController.handle);
routerVaccinationLocation.get('/vaccinationLocation',verifyTokenAuthentication, readVaccinationLocationController.handle)
export { routerVaccinationLocation }
