import { Router } from "express";

import { CreateAdministratorController } from '../controllers/Administrator/CreateAdministratorController';
import { UpdateAdministratorController } from '../controllers/Administrator/UpdateAdministratorController';
import { DeleteAdministratorController } from '../controllers/Administrator/DeleteAdministratorController';
import { ReadAdministratorsController } from '../controllers/Administrator/ReadAdministratorsController';
import { AuthenticatorController } from '../controllers/Administrator/AuthenticatorController';
import { verifyTokenAuthentication } from '../middleware/CheckToken'

const routerAdministrator = Router();

const createAdministratorController = new CreateAdministratorController();
const readAdministratorsController = new ReadAdministratorsController();
const updateAdministratorController = new UpdateAdministratorController();
const deleteAdministratorController = new DeleteAdministratorController();
const authenticatorController = new AuthenticatorController();

routerAdministrator.post('/createadministrator', createAdministratorController.handle);

routerAdministrator.get("/administrators", verifyTokenAuthentication, readAdministratorsController.handle);

routerAdministrator.put('/updateadministrator', verifyTokenAuthentication, updateAdministratorController.handle);

routerAdministrator.delete('/deleteadministrator', verifyTokenAuthentication, deleteAdministratorController.handle);

routerAdministrator.post('/login', authenticatorController.handle);

export { routerAdministrator }
