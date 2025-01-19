import React, { useState } from "react";
import { fetchQuiz } from "../api/QuizAPI";
import QuizOptions from "../components/QuizOptions";
import Quiz from "../pages/Quiz";

const Home = () => {
  const [quizData, setQuizData] = useState(null);
  const startQuiz = async (options) => {
    const data = await fetchQuiz(
      options.category,
      options.difficulty,
      options.type,
      options.amount
    );
    const formatData = data.map((q) => ({
      ...q,
      answers: [...q.incorrect_answers, q.correct_answer].sort(),
  }));
  setQuizData(formatData);
  };
  
  return (
  <div className="w-full flex-1 items-center justify-center">
    {
      !quizData ? (<QuizOptions startQuiz={startQuiz}/>):(<Quiz questions={quizData}/>)
    }
    </div>
    );
};

export default Home;
