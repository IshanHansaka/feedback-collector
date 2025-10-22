import { Request, Response, NextFunction } from 'express';
import { FeedbackService } from '../services/feedback.service';

export const FeedbackController = {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const feedbacks = await FeedbackService.getAll();
      res.status(200).json(feedbacks);
    } catch (error) {
      next(error);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, message } = req.body;
      if (!name || !message) {
        return res
          .status(400)
          .json({ message: 'Name and message are required' });
      }
      const feedback = await FeedbackService.create({ name, message });
      res.status(201).json(feedback);
    } catch (error) {
      next(error);
    }
  },
};
