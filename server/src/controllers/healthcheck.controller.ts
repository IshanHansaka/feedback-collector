import { Request, Response, NextFunction } from 'express';

export const HealthCheckController = {
  async check(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: 'Server is running successfully' });
    } catch (error) {
      next(error);
    }
  },
};
