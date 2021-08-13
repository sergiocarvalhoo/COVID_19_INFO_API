import { Router } from "express";

import { CreateVaccinationLocationController } from '../controllers/VaccinationLocation/CreateVaccinationLocationController';
import { DeleteVaccinationLocationController } from "../controllers/VaccinationLocation/DeleteVaccinationLocationController";
import { UpdateVaccinationLocationController } from "../controllers/VaccinationLocation/UpdateVaccinationLocationController";
import { verifyTokenAuthentication } from '../middleware/CheckToken'

const routerVaccinationLocation = Router();

const createVaccinationLocationController = new CreateVaccinationLocationController();
const updateVaccinationLocationController = new UpdateVaccinationLocationController();
const deleteVaccinationLocationController = new DeleteVaccinationLocationController();

routerVaccinationLocation.post('/createvaccinationlocation', verifyTokenAuthentication, createVaccinationLocationController.handle);
routerVaccinationLocation.put('/updatevaccinationlocation', verifyTokenAuthentication, updateVaccinationLocationController.handle);
routerVaccinationLocation.delete('/deletevaccinationlocation', verifyTokenAuthentication, deleteVaccinationLocationController.handle);

export { routerVaccinationLocation }
