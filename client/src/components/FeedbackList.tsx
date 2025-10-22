import type { Feedback } from '../types/feedback';

interface Props {
  feedbacks: Feedback[];
  loading: boolean;
}

const FeedbackList: React.FC<Props> = ({ feedbacks, loading }) => {
  if (loading) return <p className="text-gray-500">Loading feedbacks...</p>;

  return (
    <div className="max-w-lg w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        All Feedbacks
      </h2>

      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback yet. Be the first!</p>
      ) : (
        <ul className="space-y-3">
          {feedbacks.map((f) => (
            <li
              key={f._id}
              className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-800 text-xl">{f.name}</p>
              <p className="text-gray-600 mt-1 text-lg">{f.message}</p>
                <small className="text-gray-400 text-xs">
                {f.createdAt
                  ? new Date(f.createdAt).toLocaleString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })
                  : 'Just now'}
                </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
