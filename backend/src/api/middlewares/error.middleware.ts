import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const globalErrorMiddleware: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    success: false,
    code: statusCode,
    status: statusCode,
    message: err.message || "internal server error",
  });
};
