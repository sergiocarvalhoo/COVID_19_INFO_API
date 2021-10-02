import { Router } from "express";

import multer from "multer";
import uploadConfig from '../config/upload';
import { UpdateNewsController } from "../controllers/News/UpdateNewsController";
import { CreateNewsController } from "../controllers/News/CreateNewsController";
import { verifyTokenAuthentication } from "../middleware/CheckToken";
import { DeleteNewsController } from "../controllers/News/DeleteNewsController";
import { ReadNewsController } from "../controllers/News/ReadNewsController";
import { DetailNewsController } from "../controllers/News/DetailNewsController";

const routerNews = Router();

const createNewsController = new CreateNewsController();
const updateNewsController = new UpdateNewsController();
const readNewsController = new ReadNewsController();
const deleteNewsController = new DeleteNewsController();
const detailNewsController = new DetailNewsController();

const upload = multer(uploadConfig);

routerNews.post('/createnews', upload.array('images'), verifyTokenAuthentication, createNewsController.handle);
routerNews.put('/updatenews', upload.array('images'), verifyTokenAuthentication, updateNewsController.handle);
routerNews.get('/readnews', upload.array('images'), readNewsController.handle);
routerNews.get('/detailnews/:id', detailNewsController.handle);
routerNews.delete('/deletenews', upload.array('images'), verifyTokenAuthentication, deleteNewsController.handle);

export { routerNews }