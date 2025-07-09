import { Children, createContext, useEffect, useState } from "react";
import { dummyFetch, type Question } from "../data/dummyFetch";

interface QuestionsContextType {
  questions: Question[];
  isLoading: boolean;
  error: string | null;
}

const QuestionsContext = createContext<QuestionsContextType | undefined>(
  undefined
);

export const QuestionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      setIsLoading(true);
      try {
        const response = await dummyFetch("https://example.com/api/questions");
        if (response.status === 200) {
          setQuestions(response.data.questions);
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? "Failed to fetch questions"
            : "An unexpected error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  return(
    <>
    <QuestionsContext.Provider value={{questions, isLoading, error}}>
        {children}
    </QuestionsContext.Provider>
    </>
  )
};
