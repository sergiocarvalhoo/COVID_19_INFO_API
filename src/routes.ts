import { Router } from "express";
import { CreateAdministratorController } from './controllers/CreateAdministratorController';
import { AuthenticatorController } from './controllers/AuthenticatorController';

const router = Router();

const createAdministratorController = new CreateAdministratorController();
const authenticatorController = new AuthenticatorController();

router.post('/administrators', createAdministratorController.handle);
router.post('/login', authenticatorController.handle);

export { router }

