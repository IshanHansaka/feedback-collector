import { Feedback, IFeedback } from '../models/feedback.model';

export const FeedbackService = {
  async getAll(): Promise<IFeedback[]> {
    return await Feedback.find().sort({ createdAt: -1 });
  },

  async create(data: { name: string; message: string }): Promise<IFeedback> {
    const feedback = new Feedback(data);
    return await feedback.save();
  },
};
