"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ✅ 10 simple questions
const questions = [
  {
    q: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: 1,
  },
  {
    q: "Which planet is called the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1,
  },
  {
    q: "Who made the theory of relativity?",
    options: ["Einstein", "Newton", "Tesla", "Edison"],
    answer: 0,
  },
  {
    q: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
    answer: 1,
  },
  {
    q: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    answer: 1,
  },
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: 1,
  },
  {
    q: "Which is the biggest ocean?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: 2,
  },
  {
    q: "Who painted Mona Lisa?",
    options: ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Picasso"],
    answer: 2,
  },
  {
    q: "Boiling point of water?",
    options: ["50°C", "100°C", "150°C", "200°C"],
    answer: 1,
  },
  {
    q: "Smallest prime number?",
    options: ["0", "1", "2", "3"],
    answer: 2,
  },
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(10).fill(null));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // ⏳ Timer logic
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // When user clicks option
  const selectOption = (qIndex: number, oIndex: number) => {
    const newAns = [...answers];
    newAns[qIndex] = oIndex;
    setAnswers(newAns);
  };

  // When quiz is submitted
  const handleSubmit = () => {
    let points = 0;
    answers.forEach((ans, i) => {
      if (ans === questions[i].answer) points++;
    });
    setScore(points);
    setShowResult(true);
  };

  // Convert seconds → mm:ss
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">📝 Simple Quiz</h1>
        <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-mono">
          {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      </div>

      {/* Questions */}
      {questions.map((q, qi) => (
        <div key={qi} className="p-4 border rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">
            {qi + 1}. {q.q}
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((opt, oi) => (
              <button
                key={oi}
                onClick={() => selectOption(qi, oi)}
                className={`p-2 border rounded-lg ${
                  answers[qi] === oi
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>

      {/* Result Modal */}
      <Dialog open={showResult} onOpenChange={setShowResult}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎉 Result</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-3">
            <p className="text-lg font-semibold">Your Score</p>
            <p className="text-3xl font-bold text-blue-600">
              {score} / {questions.length}
            </p>
            <Button onClick={() => window.location.reload()}>Retry</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
