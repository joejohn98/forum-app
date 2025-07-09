import { useContext } from "react";
import { useParams } from "react-router-dom"
import QuestionsContext from "../context/QuestionsContext";

const Answer: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const questions = useContext(QuestionsContext);
    console.log("Questions Context:", questions);
    const question = questions?.questions.find(q => q.id === Number(id));

    if (!questions) {
        return <p className="text-lg text-red-500 text-center mt-20">Context not found.</p>;
    }

    if (questions.isLoading) {
        return <p className="text-xl text-gray-700 text-center mt-20">Loading...</p>;
    }
  return (
        <div className="max-w-4xl mx-auto p-4 text-center mt-16">
            <h1 className="text-xl font-semibold">Answer</h1>
           { question && (
            <div className="p-4 border rounded-md shadow-sm mt-4">
                <h2 className="text-lg font-medium">{question.answer}</h2>
                </div>
           )}
    </div>
  )
}

export default Answer
