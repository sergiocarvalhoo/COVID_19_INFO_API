import { Router } from "express";

import { CreateBulletinController } from '../controllers/Bulletin/CreateBulletinController';
import { UpdateBulletinController } from '../controllers/Bulletin/UpdateBulletinController';
import { DeleteBulletinController } from '../controllers/Bulletin/DeleteBulletinController';
import { verifyTokenAuthentication } from '../middleware/CheckToken'

const routerBulletin = Router();

const createBulletinController = new CreateBulletinController();
const updateBulletinController = new UpdateBulletinController();
const deleteBulletinController = new DeleteBulletinController();

routerBulletin.post('/createbulletin',verifyTokenAuthentication, createBulletinController.handle);
routerBulletin.put('/updatebulletin',verifyTokenAuthentication, updateBulletinController.handle);
routerBulletin.delete('/deletebulletin',verifyTokenAuthentication, deleteBulletinController.handle);


export { routerBulletin }
