import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import indexRouter  from "./routes/index.routes";
import todoRouter from "./routes/todo.routes";
import createError, { HttpError } from 'http-errors';
import { join } from 'path';

const app: Express = express();
const port = 8085;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todo', todoRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next) => {
  next(createError(404));
});

// error handler
app.use(function(err: HttpError, req: Request, res: Response) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  const errorReponse = {
    message: 'An unexpected error has ocurred',
    code: err.status || 500,
    data: null
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(errorReponse));
});


export default app;
