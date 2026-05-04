"use client"; 

import { useState } from 'react';

export default function PracticeQuiz({ topic }: { topic: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  
  const questions = [
    {
      q: "What is the derivative of x²?",
      opts: ["x", "2x", "2", "x"],
      ans: 1
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">Practice: {topic}</h3>
      <div className="p-4 bg-gray-50 rounded-xl">
        <p className="mb-4">{questions[0].q}</p>
        <div className="grid grid-cols-1 gap-2">
          {questions[0].opts.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => setSelected(i)}
              className={`p-3 text-left border rounded-lg ${selected === i ? 'bg-blue-50 border-blue-500' : 'bg-white border-gray-200'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}