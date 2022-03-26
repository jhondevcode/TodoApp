import express, { Request, Response, Router } from "express";
let todoRouter: Router = express.Router();

todoRouter.get('/', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json');
  const rsp = { mesage: 'Welcome to todo api', data: null, error: null };
  res.send(JSON.stringify(rsp));
  res.end();
});

export default todoRouter;