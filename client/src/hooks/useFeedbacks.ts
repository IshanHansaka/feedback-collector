import { useEffect, useState } from 'react';
import type { Feedback } from '../types/feedback';
import { getFeedbacks, createFeedback } from '../services/feedbackService';

export const useFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFeedbacks = async () => {
    setLoading(true);
    try {
      const data = await getFeedbacks();
      setFeedbacks(data);
    } finally {
      setLoading(false);
    }
  };

  const addFeedback = async (feedback: Omit<Feedback, '_id'>) => {
    await createFeedback(feedback);
    await fetchFeedbacks();
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return { feedbacks, addFeedback, loading };
};
