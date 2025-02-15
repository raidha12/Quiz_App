import React from "react";

const questions = [
  {
    questionText: "What is React.js?",
    answerOptions: [
      { answerText: "A JavaScript library for building user interfaces", isCorrect: true,},
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
    questionText:
      "Which command is used to start a Vite project in development mode?",
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
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg bg-gray-100 p-6 rounded-lg shadow-xl border border-gray-400">
        <div className="text-center font-bold text-2xl text-gray-900 mb-4">Quiz App</div>
        <div>
          <div className="text-lg font-semibold text-gray-700 mb-4">{questions[0].questionText}</div>
          {questions[0].answerOptions.map((option, index) => (
            <button
              key={index}
              className="block w-full p-3 mt-3 rounded-lg border border-gray-400 bg-gray-200 hover:bg-gray-300 transition duration-200"
            >
              {option.answerText}
            </button>
          ))}
          <button className="block w-full bg-green-700 text-white p-3 mt-4 rounded-lg hover:bg-green-800 transition duration-200">
            Next Question
          </button>
          <p className="text-center text-gray-500 text-sm mt-2">Question 1 of {questions.length}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
