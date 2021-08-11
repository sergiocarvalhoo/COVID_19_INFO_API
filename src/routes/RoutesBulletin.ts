import { Router } from "express";

import { CreateBulletinController } from '../controllers/Bulletin/CreateBulletinController';
import { verifyTokenAuthentication } from '../middleware/CheckToken'

const routerBulletin = Router();

const createBulletinController = new CreateBulletinController();

routerBulletin.post('/createbulletin',verifyTokenAuthentication, createBulletinController.handle);


export { routerBulletin }
