import { useState } from 'react';
import type { Feedback } from '../types/feedback';

interface Props {
  onSubmit: (feedback: Omit<Feedback, '_id'>) => Promise<void>;
}

const FeedbackForm: React.FC<Props> = ({ onSubmit }) => {
  const [form, setForm] = useState({ name: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;

    setSubmitting(true);
    await onSubmit(form);
    setForm({ name: '', message: '' });
    setSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-6 mb-6 max-w-lg w-full"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Submit Feedback
      </h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border rounded-lg p-2 mb-3 text-gray-900"
        required
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Feedback"
        className="w-full border rounded-lg p-2 mb-3 text-gray-900"
        rows={4}
        required
      ></textarea>

      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default FeedbackForm;
