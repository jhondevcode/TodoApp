import express, { Request, Response, Router } from "express";
let indexRouter: Router = express.Router();

/* GET home page. */
indexRouter.get("/", function (req: Request, res: Response) {
  const response = {
    message: 'Hello world',
    data: null,
    date: new Date()
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
  res.end();
});

export default indexRouter;
