import { useContext } from "react";
import QuestionsContext from "../context/QuestionsContext";
import { Link } from "react-router-dom";

const QuestionsList: React.FC = () => {
  const context = useContext(QuestionsContext);

  if (!context) {
    return (
      <p className="text-lg text-red-500 text-center mt-20">
        Context not found.
      </p>
    );
  }

  const { questions, isLoading, error } = context;

  if (isLoading) {
    return (
      <p className="text-xl text-gray-700 text-center mt-20">Loading...</p>
    );
  }

  if (error) {
    return <p className="text-lg text-red-500 text-center mt-20">{error}</p>;
  }
  return (
    <div className="max-w-4xl mx-auto p-4 text-center mt-16">
      <h1 className="text-xl font-semibold">Questions List</h1>
      <ul className="mt-4 space-y-4">
        {questions.map((question) => (
          <li key={question.id} className="p-4 border rounded-md shadow-sm">
            <h2 className="text-lg font-medium">{question.question}</h2>
            <Link
              className="text-blue-500 text-lg font-medium mt-2 block"
              to={`/answer/${question.id}`}
            >
              <button className="cursor-pointer hover:underline ">
                Answer
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionsList;
