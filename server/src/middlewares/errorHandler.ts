import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  console.error('Error:', err.message);
  return res.status(500).json({ message: 'Internal Server Error' });
};
