import { Router } from "express";
import multer from "multer";
import uploadConfig from '../config/upload';

import { CreateNewsController } from "../controllers/News/CreateNewsController";

import { verifyTokenAuthentication } from "../middleware/CheckToken";

const routerNews = Router();

const createNewsController = new CreateNewsController();

const upload = multer(uploadConfig);

routerNews.post('/createnews', upload.array('images'), verifyTokenAuthentication, createNewsController.handle);

export { routerNews }