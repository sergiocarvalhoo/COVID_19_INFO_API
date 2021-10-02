import { Router } from "express";

import { CreateBulletinController } from '../controllers/Bulletin/CreateBulletinController';
import { UpdateBulletinController } from '../controllers/Bulletin/UpdateBulletinController';
import { DeleteBulletinController } from '../controllers/Bulletin/DeleteBulletinController';
import { verifyTokenAuthentication } from '../middleware/CheckToken'
import { ReadBulletinController } from "../controllers/Bulletin/ReadBulletinController";

const routerBulletin = Router();

const createBulletinController = new CreateBulletinController();
const updateBulletinController = new UpdateBulletinController();
const deleteBulletinController = new DeleteBulletinController();
const readBulletinController = new ReadBulletinController();

routerBulletin.post('/createbulletin', verifyTokenAuthentication, createBulletinController.handle);
routerBulletin.put('/updatebulletin', verifyTokenAuthentication, updateBulletinController.handle);
routerBulletin.delete('/deletebulletin', verifyTokenAuthentication, deleteBulletinController.handle);
routerBulletin.get('/bulletins', readBulletinController.handle);

export { routerBulletin }
