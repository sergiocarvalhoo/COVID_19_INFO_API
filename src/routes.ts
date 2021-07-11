import { Router } from "express";
import { CreateAdministratorController } from './controllers/CreateAdministratorController';

const router = Router();

const createAdministratorController = new CreateAdministratorController();

router.post('/administrators', createAdministratorController.handle);

export { router }

