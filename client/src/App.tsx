import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { useFeedbacks } from './hooks/useFeedbacks';

const App = () => {
  const { feedbacks, addFeedback, loading } = useFeedbacks();

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Feedback Collector
      </h1>
      <FeedbackForm onSubmit={addFeedback} />
      <FeedbackList feedbacks={feedbacks} loading={loading} />
    </div>
  );
};

export default App;
