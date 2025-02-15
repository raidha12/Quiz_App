import React, { useState } from "react";

const questions = [
  {
    questionText: "What is React.js?",
    answerOptions: [
      { answerText: "A JavaScript library for building user interfaces", isCorrect: true },
      { answerText: "A programming language", isCorrect: false },
      { answerText: "A database management system", isCorrect: false },
      { answerText: "A backend framework", isCorrect: false },
    ],
  },
  {
    questionText: "Which command is used to create a new React app using Vite?",
    answerOptions: [
      { answerText: "npx create-react-app my-app", isCorrect: false },
      { answerText: "npm create vite@latest my-app", isCorrect: true },
      { answerText: "npx create vite-app my-app", isCorrect: false },
      { answerText: "vite new my-app", isCorrect: false },
    ],
  },
  {
    questionText: "Which command is used to start a Vite project in development mode?",
    answerOptions: [
      { answerText: "npm run dev", isCorrect: true },
      { answerText: "npm start", isCorrect: false },
      { answerText: "vite start", isCorrect: false },
      { answerText: "npm run build", isCorrect: false },
    ],
  },
  {
    questionText: "What is JSX in React?",
    answerOptions: [
      { answerText: "A new programming language", isCorrect: false },
      { answerText: "A syntax extension for JavaScript", isCorrect: true },
      { answerText: "A database query language", isCorrect: false },
      { answerText: "A built-in function in React", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is a React hook?",
    answerOptions: [
      { answerText: "useState", isCorrect: true },
      { answerText: "useFunction", isCorrect: false },
      { answerText: "useVariable", isCorrect: false },
      { answerText: "useMethod", isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }

  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg border border-gray-400">
        <div className="p-3 border-b text-center font-bold mb-4 text-2xl text-green-700">Quiz App</div>
        {showScore ? (
          <div className="block w-full p-2 mt-2 rounded border border-gray-400 text-gray-900 font-medium 
          text-center bg-gray-200 hover:bg-gray-100">You scored {score} out of {questions.length}
          </div>
        ) :

          <div>
            <div className="text-gray-900 font-semibold text-lg mb-2">
              {questions[currentQuestion].questionText}
            </div>

            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOption(index, option.isCorrect)}
                className={`block w-full p-2 mt-2 rounded border border-gray-400 text-gray-900 font-medium 
                ${answered ?
                    option.isCorrect ? "bg-green-500 text-white"
                      : selectedAnswer === index ? "bg-red-500 text-white"
                        : "bg-gray-200"
                    : "hover:bg-gray-100"}`
                }>{option.answerText}
              </button>
            ))}

            <button
              className={`block w-full text-white p-2 rounded mt-4 font-semibold 
              ${answered ? "bg-green-700 hover:bg-green-800" : "bg-green-400 cursor-not-allowed"}`}
              disabled={!answered}
              onClick={nextQuestion}>{currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>

            <p className="text-center text-gray-500 text-sm mt-2">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
