import express from 'express';
import aiChat from '../controllers/aiChat.controller.js';
const AiRouter = express.Router();

AiRouter.post('/', aiChat);

export default AiRouter;