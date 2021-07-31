import { Router } from "express";

import { CreateAdministratorController } from '../controllers/CreateAdministratorController';
import { UpdateAdministratorController } from '../controllers/UpdateAdministratorController';
import { DeleteAdministratorController } from '../controllers/DeleteAdministratorController';
import { AuthenticatorController } from '../controllers/AuthenticatorController';

const routerAdministrator = Router();

const createAdministratorController = new CreateAdministratorController();
const updateAdministratorController = new UpdateAdministratorController();
const deleteAdministratorController = new DeleteAdministratorController();
const authenticatorController = new AuthenticatorController();

routerAdministrator.post('/createadministrator', createAdministratorController.handle);

routerAdministrator.put('/updateadministrator', updateAdministratorController.handle);

routerAdministrator.delete('/deleteadministrator', deleteAdministratorController.handle);

routerAdministrator.post('/login', authenticatorController.handle);

export { routerAdministrator }
