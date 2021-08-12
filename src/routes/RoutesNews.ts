import { Router } from "express";

import { CreateNewsController } from "../controllers/News/CreateNewsController";

import { verifyTokenAuthentication } from "../middleware/CheckToken";

const routerNews = Router();

const createNewsController = new CreateNewsController();

routerNews.post('/createnews', verifyTokenAuthentication, createNewsController.handle);

export { routerNews }