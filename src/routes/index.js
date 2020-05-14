import express from 'express';
import {
  indexPage,
  addMessage,
  messagesPage
} from '../controllers';


const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);

export default indexRouter;
