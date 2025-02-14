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
      <div className="w-full max-w-lg bg-white p-5 rounded shadow-lg">
        <div className="p-2 border text-center font-bold mb-2 text-xl">
          Quiz App
        </div>
        <div>
          <div>{questions[0].questionText}</div>
          {questions[0].answerOptions.map((option, index) => (
            <button className="block w-full p-2 mt-2 rounded border">
              {option.answerText}
            </button>
          ))}
          <button className="block w-full bg-green-600 text-white p-2 rounded">
            Next Question
          </button>
          <p className="text-center text-gray-400 text-sm">
            Question 1 of {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
