import { Router } from "express";

import { CreateAdministratorController } from '../controllers/CreateAdministratorController';
import { DeleteAdministratorController } from '../controllers/DeleteAdminstratorController';
import { AuthenticatorController } from '../controllers/AuthenticatorController';

const routerAdministrator = Router();

const createAdministratorController = new CreateAdministratorController();
const deleteAdministratorController = new DeleteAdministratorController();
const authenticatorController = new AuthenticatorController();

routerAdministrator.post('/createadministrator', createAdministratorController.handle);

routerAdministrator.delete('/deleteadministrator', deleteAdministratorController.handle);

routerAdministrator.post('/login', authenticatorController.handle);

export { routerAdministrator }
