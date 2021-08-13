import { Router } from "express";

import multer from "multer";
import uploadConfig from '../config/upload';
import { UpdateNewsController } from "../controllers/News/UpdateNewsController";
import { CreateNewsController } from "../controllers/News/CreateNewsController";
import { verifyTokenAuthentication } from "../middleware/CheckToken";
import { DeleteNewsController } from "../controllers/News/DeleteNewsController";

const routerNews = Router();

const createNewsController = new CreateNewsController();
const updateNewsController = new UpdateNewsController();
const deleteNewsController = new DeleteNewsController();

const upload = multer(uploadConfig);

routerNews.post('/createnews', upload.array('images'), verifyTokenAuthentication, createNewsController.handle);
routerNews.put('/updatenews', upload.array('images'), verifyTokenAuthentication, updateNewsController.handle);
routerNews.delete('/deletenews', upload.array('images'), verifyTokenAuthentication, deleteNewsController.handle);

export { routerNews }