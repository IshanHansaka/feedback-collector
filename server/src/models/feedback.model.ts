import mongoose, { Schema, Document } from 'mongoose';

export interface IFeedback extends Document {
  name: string;
  message: string;
  createdAt: Date;
}

const feedbackSchema = new Schema<IFeedback>({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Feedback = mongoose.model<IFeedback>('Feedback', feedbackSchema);
